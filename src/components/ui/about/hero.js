'use client';

import { motion } from 'framer-motion';
import { H1, P } from '../typography';

export function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='space-y-4'>
      <H1>About Me</H1>
      <P className='text-xl text-muted-foreground'>
        Just a nerd who loves to code and build things. I specialize in money making web
        apps and sites.
      </P>
    </motion.section>
  );
}
