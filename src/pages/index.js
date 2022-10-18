import Layout from '../components/layout';
import { Container } from '../components/ui/containers';
import { HomepageHero } from '../components/ui/heros';
import { AboutMe } from '../components/ui/sections';

const Home = () => {
  return (
    <Layout>
      <HomepageHero />
      <AboutMe />
    </Layout>
  );
};

export default Home;
