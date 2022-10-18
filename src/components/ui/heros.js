import Link from 'next/link';
import {
  EthereumLogo,
  GitHubLogo,
  LinkedInLogo,
  TwitterLogo,
} from '../icons/socials';
import { SocialIconBtn } from './buttons';
import { Container } from './containers';

export const HomepageHero = () => {
  return (
    <section>
      <Container className='flex flex-col justify-center items-center gap-2 text-center h-[85vh] 3xl:h-[50vh]'>
        <div className='hero-text'>
          <h1 className='text-5xl md:text-6xl'>
            Hi! I&apos;m <br className='md:hidden' />
            <strong>Rishit Patel</strong>.
          </h1>{' '}
          <span className='text-2xl sm:text-3xl'>
            <span
              className='animate-fade-in-left'
              style={{ animationDelay: '200ms' }}
            >
              A
            </span>{' '}
            <span
              className='animate-fade-in-left'
              style={{ animationDelay: '500ms' }}
            >
              Full
            </span>{' '}
            <span
              className='animate-fade-in-left'
              style={{ animationDelay: '800ms' }}
            >
              Stack
            </span>{' '}
            <span
              className='animate-fade-in-left'
              style={{ animationDelay: '1100ms' }}
            >
              Developer.
            </span>
          </span>
        </div>
        <div className='flex gap-4 social-icons'>
          <SocialIconBtn
            link='https://github.com/imrishit98'
            className='bg-black'
          >
            <GitHubLogo />
          </SocialIconBtn>
          <SocialIconBtn
            link='https://twitter.com/imrishit98'
            className='bg-[#1d9bf0]'
          >
            <TwitterLogo />
          </SocialIconBtn>
          <SocialIconBtn
            link='https://www.linkedin.com/in/imrishit98'
            className='bg-[#0A66C2]'
          >
            <LinkedInLogo />
          </SocialIconBtn>
          <SocialIconBtn
            link='https://rishitpatel.eth.xyz'
            className='bg-black text-white'
          >
            <EthereumLogo />
          </SocialIconBtn>
        </div>
      </Container>
    </section>
  );
};
