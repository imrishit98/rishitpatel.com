import { ProjectsGrid } from '@/components/ui/projects/projects-grid';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/ui/page-header';
import { Container } from '@/components/ui/containers';

export const metadata = {
  title: 'Projects - Rishit Patel',
  description:
    'Explore my portfolio of projects, including directories, SaaS applications, and more.',
};

export default function ProjectsPage() {
  return (
    <Container className='pb-8'>
      <PageHeader className='pb-8'>
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of my work, ranging from directory websites to SaaS applications.
          Each project is built with 💜 and Next JS.
        </PageHeaderDescription>
      </PageHeader>

      <ProjectsGrid />
    </Container>
  );
}
