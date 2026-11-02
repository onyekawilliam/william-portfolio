import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal as="article" className="group/card relative">
      <div className="grid grid-cols-1 overflow-hidden border border-white/10 bg-coal transition-all duration-300 hover:border-white/20 lg:grid-cols-12">
        <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
          <ProjectPreview type={project.preview} name={project.name} />
        </div>

        <div className={`flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
          <div>
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-accent font-semibold">Project 0{index + 1}</span>
              <span className="text-mist">{project.kind}</span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-bone sm:text-3xl">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">{project.description}</p>

            <div className="mt-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-wider text-white/40">Built with</p>
              <ul className="mt-2.5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag} className="border border-white/10 bg-charcoal/60 px-2.5 py-1 font-mono text-xs text-bone">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/8 pt-6">
            <Button
              href={project.github}
              external
              variant={project.live ? 'outline' : 'primary'}
              size="sm"
              aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
            >
              <Github size={15} />
              GitHub Repo
            </Button>
            {project.live && (
              <Button
                href={project.live}
                external
                size="sm"
                aria-label={`View the ${project.name} live demo (opens in a new tab)`}
              >
                Live Demo
                <ExternalLink size={14} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
