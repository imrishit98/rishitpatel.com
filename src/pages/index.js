import Layout from '../components/layout';
import { Container } from '../components/ui/containers';
import { HomepageHero } from '../components/ui/heros';
import { AboutMe } from '../components/ui/sections';
import MyJourney from '../components/ui/sections/my-journey';
import MyProjects from '../components/ui/sections/my-projects';

const Home = () => {
  return (
    <Layout>
      <HomepageHero />
      <AboutMe />
      <MyJourney />
      <MyProjects />
    </Layout>
  );
};

export default Home;
