'use client';

import { motion } from 'framer-motion';
import { H2 } from '../typography';

const skills = {
  frontend: ['React & Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'RESTful APIs', 'Database Design'],
};

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='space-y-6'>
      <div className='prose dark:prose-invert'>
        <p>
          I'm a full-stack developer from Northern Ontario 🍁 that builds money making
          machines on the web. If you want to make sites that generate revenue, feel free
          to{' '}
          <a
            href='https://tally.so/r/nGX6Bz'
            className='underline hover:text-primary'>
            reach out
          </a>
          !
        </p>

        <H2>Tech Stack</H2>
      </div>
    </motion.section>
  );
}
