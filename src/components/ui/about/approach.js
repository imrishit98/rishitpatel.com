'use client';

import { motion } from 'framer-motion';

const approaches = [
  'Performance optimization',
  'Responsive design',
  'Accessibility standards',
  'Clean code architecture',
  'Modern development practices',
];

export function Approach() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className='prose dark:prose-invert'>
      <h2 className='text-2xl font-semibold mt-8 mb-4'>My Approach</h2>
      <p>
        I believe in writing clean, maintainable code and following best practices. My
        development process emphasizes:
      </p>
      <ul className='space-y-2'>
        {approaches.map(approach => (
          <li key={approach}>{approach}</li>
        ))}
      </ul>
    </motion.section>
  );
}
