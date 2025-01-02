'use client';

import { motion } from 'framer-motion';
import { H2, P } from '../typography';
import Link from 'next/link';

const skills = {
  ui: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
  database: ['Supabase', 'Upstash'],
  ai: ['Together AI', 'OpenAI API', 'Pinecone', 'Carbon AI'],
  other: ['Stripe', 'Cloudflare R2', 'Loops', 'Plausible Analytics']
};

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='space-y-6'>
      <div className='max-w-4xl'>
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

        <H2>Tech Stack</H2>
      </div>
    </motion.section>
  );
}
