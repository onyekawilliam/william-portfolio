import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { projects } from '../data/site'

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="02" label="Selected Work" title="Projects I’ve built along the way.">
          A few projects from my GitHub, from a full-stack ordering platform to my first portfolio.
        </SectionHeading>

        <div className="mt-16 space-y-8 lg:space-y-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mist">
            Previews are designed illustrations, not screenshots. Technology tags come from each
            repository’s dependencies, and some projects are still in progress, so check the
            repositories for their current state.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
