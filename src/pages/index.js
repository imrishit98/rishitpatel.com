import Layout from '../components/layout';
import { HomepageHero } from '../components/ui/heros';
import AboutMe from '../components/ui/sections/about-me';
import Experience from '../components/ui/sections/experience';
import Projects from '../components/ui/sections/projects';

const Home = () => {
  return (
    <Layout>
      <HomepageHero />
      <AboutMe />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default Home;
