import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'aitools.fyi',
    description:
      'A comprehensive directory of AI tools and resources, helping users discover and compare the latest artificial intelligence solutions.',
    url: 'https://aitools.fyi/',
    type: 'Directory',
  },
  {
    title: 'Amazing Newsletters',
    description:
      'A curated platform showcasing the best newsletters across various topics, helping readers discover valuable content.',
    url: 'https://amazingnewsletters.com/',
    type: 'Directory',
  },
  {
    title: 'PDF Peer',
    description:
      'A SaaS platform for advanced PDF processing and manipulation, offering powerful tools for document management.',
    url: 'https://pdfpeer.com/',
    type: 'SaaS',
  },
  {
    title: 'ChatSimple',
    description:
      'An AI-powered chat platform that simplifies customer interactions and support automation.',
    url: 'https://www.chatsimple.ai/',
    type: 'SaaS',
  },
];

export function ProjectsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {projects.map(project => (
        <ProjectCard
          key={project.url}
          title={project.title}
          description={project.description}
          url={project.url}
          type={project.type}
        />
      ))}
    </div>
  );
}
