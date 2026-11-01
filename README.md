# William, Frontend Developer Portfolio

A responsive, dark-themed portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion** and **Lucide** icons.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

## Replace these before going live

All editable content lives in **[`src/data/site.js`](src/data/site.js)**.

| Item | Where | What to do |
| --- | --- | --- |
| Email | `contact.email` | Set `value` to your address and `placeholder: false` |
| WhatsApp | `contact.whatsapp` | Set `value` (international format, e.g. `+234 800 000 0000`) and `placeholder: false` |
| LinkedIn | `contact.linkedin` | Set `value` to your profile URL and `placeholder: false` |
| Contact form delivery | `.env` | See below |

Placeholders render as dashed, non-clickable cards with a **Replace me** badge, so no dead or fake links are shown. Once `placeholder` is `false` they become real links.

## Making the contact form actually send messages

The form validates input and shows clear success/error feedback, but **a static site cannot send email on its own**. Until you connect a service, a valid submission shows an honest "not connected yet, message was not sent" notice.

1. Create a form on a service such as [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) or [Getform](https://getform.io) (or use your own backend). It must accept a JSON `POST` with `name`, `email`, `project`, `message`.
2. Copy `.env.example` to `.env` and set the endpoint:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```
3. Restart the dev server / rebuild. On your host (Vercel, Netlify, etc.) add the same variable in the project's environment settings.

## Projects

Project facts were verified against the public repositories (dependencies and structure). Previews are **designed illustrations, not screenshots**. Only *Personal Portfolio* has a live demo (`https://my-porfolio-gamma-two.vercel.app`), which was checked and renders. To add a live demo to another project, set its `live` URL in `src/data/site.js`.

## Structure

```
src/
  components/   Navbar, Hero, About, Work, Services, TechStack, Contact, Footer, ...
  data/site.js  All content: projects, services, stack, contact details
  hooks/        useActiveSection (scroll-spy for the nav)
  lib/          Lazy-loaded Framer Motion features
public/favicon.svg
```
