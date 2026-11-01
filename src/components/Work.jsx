import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { projects } from '../data/site'

export default function Work() {
  return (
    <section id="work" className="relative border-t border-white/6 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="02" label="Selected Work" title="Projects & practical engineering.">
          A selection of projects exploring restaurant ordering platforms, backend architecture, and
          responsive interfaces.
        </SectionHeading>

        <div className="mt-12 space-y-6 lg:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-4 font-mono text-xs text-mist">
            <span>Verified repositories on GitHub</span>
            <span className="text-bone">Explore codebases via the repo links above</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
