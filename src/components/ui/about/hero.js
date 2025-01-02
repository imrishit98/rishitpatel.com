'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='space-y-4'>
      <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
        About Me
      </h1>
      <p className='text-xl text-muted-foreground'>
        Just a nerd who loves to code and build things. I specialize in money making web
        apps and sites.
      </p>
    </motion.section>
  );
}
