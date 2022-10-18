import Layout from '../components/layout';
import { Container } from '../components/ui/containers';
import { HomepageHero } from '../components/ui/heros';
import { AboutMe } from '../components/ui/sections';
import MyJourney from '../components/ui/sections/my-journey';

const Home = () => {
  return (
    <Layout>
      <HomepageHero />
      <MyJourney />
      <AboutMe />
    </Layout>
  );
};

export default Home;
