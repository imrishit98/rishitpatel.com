import Image from 'next/image';
import {
  ChromeWebStoreLogo,
  ReactLogo,
  SassLogo,
  SpotifyLogo,
  VercelLogo,
  YoutubeLogo,
} from '../../icons/tech';
import { TechIconBtn } from '../buttons';
import { Container } from '../containers';
import { H2, H3, H5 } from '../typography';
import Section from './index';

const Projects = () => {
  return (
    <Section id='projects'>
      <Container className='flex flex-col justify-center items-center gap-10 text-center'>
        <H2>My Projects</H2>
        <div className='flex flex-col justify-center items-center gap-4 w-full lg:flex-row lg:gap-8 xl:gap-12'>
          <div className='flex justify-center items-center'>
            <div className='w-64 xl:w-80'>
              <Image
                src='/images/logos/youfy.svg'
                alt='ion8 logo'
                width={400}
                height={400}
                className='flex w-8 h-8 rounded-md'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 w-full lg:items-start xl:justify-start xl:gap-4 xl:h-full'>
            <H3 className='xl:text-left'>Youfy - YouTube to Spotify</H3>
            <p className='lg:text-left'>
              Youfy is a quick and easy way to transfer YouTube songs and
              playlists to your Spotify account without leaving YouTube!
            </p>
            <H5>Tech Stack:</H5>
            <div className='flex flex-wrap justify-center gap-2 w-full lg:justify-start'>
              <div className='flex gap-2 items-center w-max'>
                <TechIconBtn className='bg-white'>
                  <ChromeWebStoreLogo className='w-8' />
                </TechIconBtn>
                <span className='font-semibold'>Chrome Extension</span>
              </div>
              <div className='flex gap-2 items-center w-max'>
                <TechIconBtn className='bg-[#00D8FF]'>
                  <ReactLogo className='w-8' />
                </TechIconBtn>
                <span className='font-semibold'>React</span>
              </div>
              <div className='flex gap-2 items-center w-max'>
                <TechIconBtn className='bg-[#cd6799]'>
                  <SassLogo className='w-8' />
                </TechIconBtn>
                <span className='font-semibold'>Sass</span>
              </div>
              <div className='flex gap-2 items-center w-max'>
                <TechIconBtn className='bg-black'>
                  <SpotifyLogo className='w-8' />
                </TechIconBtn>
                <span className='font-semibold'>Spotify API</span>
              </div>
              <div className='flex gap-2 items-center w-max'>
                <TechIconBtn className='bg-white'>
                  <YoutubeLogo className='w-8' />
                </TechIconBtn>
                <span className='font-semibold'>YouTube API</span>
              </div>
              <div className='flex gap-2 items-center w-max'>
                <TechIconBtn className='bg-black'>
                  <VercelLogo className='w-8' />
                </TechIconBtn>
                <span className='font-semibold'>Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
