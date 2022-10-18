import { Container } from './containers';
import { H2 } from './typography';

export const AboutMe = () => {
  return (
    <section className='py-20'>
      <Container className='flex flex-col justify-center items-center gap-10 text-center'>
        <H2>About me</H2>
        <p className='text-lg md:text-xl'>
          Hey there! I’m Rishit Patel, a web developer and software developer. I
          love to create awesome things for the web. I’m currently studying
          Computer Programmer Analyst at Canadore College.
        </p>
      </Container>
    </section>
  );
};
