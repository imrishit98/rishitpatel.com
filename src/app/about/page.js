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
    <Container>
      <div className='max-w-3xl mx-auto py-12 space-y-8'>
        <AboutHero />
        <Skills />
        <Approach />
        <Contact />
      </div>
    </Container>
  );
}
