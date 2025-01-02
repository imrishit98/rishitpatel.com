import { Container } from '@/components/ui/containers';
import { AboutHero } from '@/components/ui/about/hero';
import { Skills } from '@/components/ui/about/skills';
import { Approach } from '@/components/ui/about/approach';
import { Contact } from '@/components/ui/about/contact';

export const metadata = {
  title: 'About | Rishit Patel',
  description:
    'Learn more about Rishit Patel - AI and Web Developer specializing in modern web applications',
};

export default function AboutPage() {
  return (
    <Container className='pt-6 pb-12'>
      <AboutHero />
      <Skills />
      <Approach />
      <Contact />
    </Container>
  );
}
