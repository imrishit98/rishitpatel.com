import { AboutHero } from '@/components/ui/about/hero';
import { Skills } from '@/components/ui/about/skills';
import { Container } from '@/components/ui/containers';

export const metadata = {
  title: 'About | Rishit Patel',
  description:
    'Learn more about Rishit Patel - AI and Web Developer specializing in modern web applications',
};

export default function AboutPage() {
  return (
    <Container className='pt-2 pb-12'>
      <AboutHero />
      <Skills />
    </Container>
  );
}
