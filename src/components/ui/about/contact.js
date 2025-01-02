'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className='mt-12 border-t pt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Let's Work Together</h2>
      <p className='text-muted-foreground'>
        I'm always interested in new projects and collaborations. Whether you need a new
        web application, want to improve an existing one, or just want to chat about
        technology, feel free to reach out.
      </p>
    </motion.section>
  );
}
