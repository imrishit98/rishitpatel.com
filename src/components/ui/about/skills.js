'use client';

import { motion } from 'framer-motion';
import { H2, P } from '../typography';
import Link from 'next/link';

const skills = {
  ui: ['Next.js', 'ReactJS', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
  database: ['Supabase', 'Upstash', 'Pinecone'],
  ai: ['Together AI', 'OpenAI', 'Claude', 'Replicate', 'Fal AI', 'Cursor'],
  other: ['Stripe', 'Cloudflare R2', 'Loops', 'Plausible Analytics', 'Vercel'],
};

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='space-y-6'>
      <div className='max-w-4xl'>
        <H2>Tech Stack</H2>

        <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className='rounded-lg border p-4 shadow-sm'>
            <h3 className='mb-3 font-semibold'>UI & Framework</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              {skills.ui.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className='rounded-lg border p-4 shadow-sm'>
            <h3 className='mb-3 font-semibold'>Database</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              {skills.database.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='rounded-lg border p-4 shadow-sm'>
            <h3 className='mb-3 font-semibold'>AI & ML</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              {skills.ai.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className='rounded-lg border p-4 shadow-sm'>
            <h3 className='mb-3 font-semibold'>Other Tools</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              {skills.other.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
