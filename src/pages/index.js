import Layout from '../components/layout';
import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Layout>
      <Container className='flex flex-col justify-center items-center text-center h-[85vh] 3xl:h-[50vh]'>
        <h1 className='text-5xl md:text-6xl'>
          Hi! I&apos;m <br className='md:hidden' />
          <strong>Rishit Patel</strong>.
        </h1>{' '}
        <h2 className='text-2xl sm:text-3xl'>
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
        </h2>
      </Container>
    </Layout>
  );
};

export default Home;
