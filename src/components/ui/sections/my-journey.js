import Section from './index';
import { JourneyCard } from '../cards';
import { Container } from '../containers';
import { H2, H3, H4, H5 } from '../typography';

const MyJourney = () => {
  return (
    <Section>
      <Container className='flex flex-col justify-center items-center gap-10 text-center'>
        <H2>My Journey</H2>
        <div className='grid gap-6 md:gap-8'>
          <JourneyCard imgSrc='/images/logos/ion8.jpg' imgAlt='ion8 logo'>
            <H3>Software Designer</H3>
            <H5>ion8.net</H5>
            <H5>May 2020 - Present</H5>
          </JourneyCard>
          <JourneyCard
            imgSrc='/images/logos/web3-academy-dao.jpg'
            imgAlt='ion8 logo'
          >
            <H3>Core Team Member</H3>
            <H5>Web3 Academy DAO</H5>
            <H5>July 2022 - Present</H5>
          </JourneyCard>
          <JourneyCard imgSrc='/images/logos/zedd.jpg' imgAlt='ion8 logo'>
            <H3>Sales Representative</H3>
            <H5>Zedd Customer Solutions</H5>
            <H5>September 2018 - July 2020</H5>
          </JourneyCard>
          <JourneyCard
            imgSrc='/images/logos/torofi-broadband.png'
            imgAlt='ion8 logo'
          >
            <H3>Network Engineer</H3>
            <H5>Torofi Networks Private Limited</H5>
            <H5>March 2016 - June 2017</H5>
          </JourneyCard>
        </div>
      </Container>
    </Section>
  );
};

export default MyJourney;
