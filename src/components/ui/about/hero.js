'use client';

import { motion } from 'framer-motion';
import { H1, P } from '../typography';
import Link from 'next/link';

export function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='space-y-2 py-6'>
      <H1>About Me</H1>
      <P className='text-xl text-muted-foreground'>
        Just a nerd who loves to code and build things. I specialize in money making web
        apps and sites.
      </P>
      <P className='mb-4'>
        I'm a full-stack developer from Northern Ontario 🍁 that builds money making
        machines on the web. If you want to make sites that generate revenue, feel free
        to{' '}
        <Link
          href='https://tally.so/r/nGX6Bz'
          className='underline hover:text-primary'>
          reach out
        </Link>
        !
      </P>
    </motion.section>
  );
}
