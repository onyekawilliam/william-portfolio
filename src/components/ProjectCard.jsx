import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal as="article" className="group/card relative">
      <div className="grid grid-cols-1 overflow-hidden border border-line bg-charcoal transition-colors duration-300 hover:border-accent/60 lg:grid-cols-12">
        <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
          <ProjectPreview type={project.preview} />
        </div>

        <div className={`flex flex-col justify-between p-7 sm:p-10 lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
          <div>
            <div className="flex items-center justify-between font-mono text-xs tracking-[0.18em] uppercase">
              <span className="text-accent">0{index + 1}</span>
              <span className="text-mist">{project.kind}</span>
            </div>

            <h3 className="mt-8 text-3xl font-bold sm:text-4xl">{project.name}</h3>
            <p className="mt-4 leading-relaxed text-mist">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag} className="border border-white/12 px-3 py-1 font-mono text-xs text-bone">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href={project.github}
              external
              variant={project.live ? 'outline' : 'primary'}
              size="sm"
              aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
            >
              <Github size={16} />
              GitHub
            </Button>
            {project.live && (
              <Button
                href={project.live}
                external
                size="sm"
                aria-label={`View the ${project.name} live demo (opens in a new tab)`}
              >
                Live Demo
                <ExternalLink size={15} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
