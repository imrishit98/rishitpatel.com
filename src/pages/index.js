import Layout from '../components/layout';
import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Layout>
      <Container className='flex justify-center items-center text-center h-[85vh]'>
        <h1 className='text-4xl font-bold'>
          Hi, I&apos;m Rishit Patel. <br /> I&apos;m a Full Stack Developer.
        </h1>
      </Container>
    </Layout>
  );
};

export default Home;
