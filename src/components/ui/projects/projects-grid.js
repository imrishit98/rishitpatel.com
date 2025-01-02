import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'aitools.fyi',
    description:
      'Your friendly neighborhood AI tool finder! Like a matchmaker for humans and AI, but without the awkward first dates. 🤖❤️',
    url: 'https://aitools.fyi/',
    type: 'Directory',
  },
  {
    title: 'Amazing Newsletters',
    description:
      'The Netflix of newsletters! Binge-worthy content delivered straight to your inbox, minus the "are you still reading?" prompts. 📧✨',
    url: 'https://amazingnewsletters.com/',
    type: 'Directory',
  },
  {
    title: 'PDF Peer',
    description:
      'The superhero your PDFs deserve! Turning boring documents into well-behaved files faster than you can say "paperless". 📄💪',
    url: 'https://pdfpeer.com/',
    type: 'SaaS',
  },
  {
    title: 'ChatSimple',
    description:
      "Teaching AI to chat like a pro! It's like having a witty assistant who never needs coffee breaks. 🎭💬",
    url: 'https://www.chatsimple.ai/',
    type: 'SaaS',
  },
  {
    title: 'World of AI',
    description:
      'The ultimate newsletter for AI enthusiasts! Your weekly dose of AI news, trends, tutorials, and more delivered with ❤️.',
    url: 'https://worldofai.beehiiv.com/',
    type: 'Newsletter',
  },
  {
    title: 'revRN',
    description:
      'Transform your ideas into reality with our expert team. We build MVPs that are as unique as your vision. 🚀🌟',
    url: 'https://revrn.com/',
    type: 'MVP Building Service',
  },
  {
    title: 'Tiny AI Tools',
    description:
      "AI tools that pack a punch! It's like having a Swiss Army knife for your business, but with more AI and less corkscrews. 🧰🤖",
    url: 'https://tiny.aitools.fyi/',
    type: 'SaaS',
  },
  {
    title: 'BIMToolsHub (coming soon)',
    description:
      'The ultimate directory for BIM tools! Find the best software for your projects, minus the endless Google searches. 🏗️🛠️',
    url: 'https://bimtoolshub.com/',
    type: 'Directory',
  },
  {
    title: 'Youfy',
    description:
      'The magical tool that converts your YouTube playlists into Spotify playlists! 🎶🔮',
    url: 'https://youfyapp.com/',
    type: 'Fun',
  },
  {
    title: 'AI of the Day (Got Acquired)',
    description:
      'Your daily dose of AI inspiration! Discover new AI tools, projects, and resources every day. 🤖🌟',
    url: 'https://aioftheday.com/',
    type: 'Directory',
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
          url={project.url + '?ref=rishitpatel'}
          type={project.type}
        />
      ))}
    </div>
  );
}
