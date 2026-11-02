import { useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import Button from './Button'
import { contact, projectTypes } from '../data/site'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim()

const initialValues = { name: '', email: '', project: '', message: '', company: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validateField(field, value) {
  const v = value.trim()
  switch (field) {
    case 'name':
      if (!v) return 'Please tell me your name.'
      if (v.length < 2) return 'Your name should be at least 2 characters.'
      return ''
    case 'email':
      if (!v) return 'Please enter your email address.'
      if (!EMAIL_RE.test(v)) return 'That doesn’t look like a valid email address.'
      return ''
    case 'message':
      if (!v) return 'Please tell me a little about your project.'
      if (v.length < 20) return `Add a bit more detail (${20 - v.length} more characters).`
      if (v.length > 2000) return 'Please keep your message under 2000 characters.'
      return ''
    default:
      return ''
  }
}

const validate = (values) => ({
  name: validateField('name', values.name),
  email: validateField('email', values.email),
  message: validateField('message', values.message),
})

const fieldBase =
  'w-full border bg-ink px-4 py-3.5 text-bone placeholder:text-white/35 transition-colors focus:border-accent focus:outline-none'

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium">
        {label}
        {optional && <span className="font-mono text-xs font-normal text-mist">Optional</span>}
      </label>
      {children}
      <p
        id={`${id}-error`}
        role={error ? 'alert' : undefined}
        className={`mt-2 flex items-center gap-1.5 text-sm text-red-400 ${error ? '' : 'hidden'}`}
      >
        <AlertCircle size={14} aria-hidden="true" className="shrink-0" />
        {error}
      </p>
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  // status: idle | sending | success | error
  const [status, setStatus] = useState('idle')
  const [deliveryMethod, setDeliveryMethod] = useState(ENDPOINT ? 'api' : 'mailto')
  const [submittedData, setSubmittedData] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef(null)

  const showError = (field) => (touched[field] ? errors[field] : '')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    if (status === 'error') setStatus('idle')
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, message: true })

    const firstInvalid = Object.keys(nextErrors).find((key) => nextErrors[key])
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }

    // Honeypot: real visitors never see or fill this field.
    if (values.company) {
      setStatus('success')
      return
    }

    if (!ENDPOINT) {
      // No form service connected: hand the message to the visitor's mail client.
      // The draft stays in the form until they choose to leave the success screen,
      // so nothing is lost if no mail app opens.
      const targetEmail = contact.email.value
      const subject = `Project Inquiry: ${values.project || 'Frontend Development'} from ${values.name}`
      const body = `Hi William,\n\nName: ${values.name}\nEmail: ${values.email}\nService needed: ${values.project || 'General Inquiry'}\n\nMessage:\n${values.message}\n`

      setSubmittedData({
        targetEmail,
        subject,
        body,
        mailtoUrl: `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      })
      setDeliveryMethod('mailto')

      // Trigger user's mail client
      window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          project: values.project || 'Not specified',
          message: values.message.trim(),
        }),
      })
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
      setDeliveryMethod('api')
      setValues(initialValues)
      setTouched({})
      setErrors({})
      setStatus('success')
    } catch {
      setErrorMessage(
        `Unable to send your message. Please check your connection or email me directly at ${contact.email.value}.`,
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    if (deliveryMethod === 'api') {
      return (
        <div role="status" className="flex h-full flex-col items-start justify-center border border-accent/40 bg-charcoal p-8 sm:p-12">
          <CheckCircle2 size={40} strokeWidth={1.5} className="text-emerald-400" aria-hidden="true" />
          <h3 className="mt-6 text-3xl font-bold">Message sent!</h3>
          <p className="mt-3 max-w-md leading-relaxed text-mist">
            Thank you for reaching out. Your message has been sent directly to{' '}
            <span className="font-semibold text-bone">{contact.email.value}</span>. I will review your details and reply shortly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
              Send another message
            </Button>
            <Button href={contact.whatsapp.href(contact.whatsapp.value)} external size="sm">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      )
    }

    // Honest delivery confirmation for email draft path
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center border border-accent/40 bg-charcoal p-8 sm:p-12">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={36} strokeWidth={1.5} className="text-emerald-400" aria-hidden="true" />
          <span className="border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
            Inquiry Drafted
          </span>
        </div>
        <h3 className="mt-6 text-3xl font-bold">Email draft ready</h3>
        <p className="mt-3 max-w-lg leading-relaxed text-mist">
          Your message has been pre-filled for{' '}
          <span className="font-semibold text-bone">{contact.email.value}</span>.
          Please confirm and click <strong className="text-bone font-semibold">Send</strong> in your mail application.
          If nothing opened, use one of the options below. Your message is still saved here.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {submittedData?.gmailUrl && (
            <Button href={submittedData.gmailUrl} external size="sm">
              Open in Gmail Webmail
            </Button>
          )}
          {submittedData?.mailtoUrl && (
            <Button href={submittedData.mailtoUrl} variant="outline" size="sm">
              Launch Mail App
            </Button>
          )}
          <Button href={contact.whatsapp.href(contact.whatsapp.value)} external variant="outline" size="sm">
            Chat on WhatsApp
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs text-mist underline underline-offset-4 hover:text-bone"
        >
          ← Return to form
        </button>
      </div>
    )
  }

  const invalid = (field) => (showError(field) ? true : undefined)
  const border = (field) => (showError(field) ? 'border-red-400/80' : 'border-white/15 hover:border-white/30')

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="relative border border-line bg-charcoal p-6 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={showError('name')}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={invalid('name')}
            aria-describedby={showError('name') ? 'name-error' : undefined}
            placeholder="Your name"
            className={`${fieldBase} ${border('name')}`}
          />
        </Field>

        <Field id="email" label="Email" error={showError('email')}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={invalid('email')}
            aria-describedby={showError('email') ? 'email-error' : undefined}
            placeholder="you@company.com"
            className={`${fieldBase} ${border('email')}`}
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field id="project" label="What do you need?" optional>
          <select
            id="project"
            name="project"
            value={values.project}
            onChange={handleChange}
            className={`${fieldBase} ${border('project')} select-arrow`}
          >
            <option value="">Select a service…</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field id="message" label="Tell me about your project" error={showError('message')}>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={invalid('message')}
            aria-describedby={showError('message') ? 'message-error' : undefined}
            placeholder="What are you building, and what would you like help with?"
            className={`${fieldBase} ${border('message')} resize-y`}
          />
        </Field>
      </div>

      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={handleChange} />
      </div>

      {status === 'error' && (
        <div role="alert" className="mt-6 flex items-start gap-3 border border-red-400/40 bg-red-400/[0.07] p-4 text-sm leading-relaxed text-red-200">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send message <Send size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
        <p className="text-sm text-mist">I’ll only use your details to reply to you.</p>
      </div>
    </form>
  )
}
