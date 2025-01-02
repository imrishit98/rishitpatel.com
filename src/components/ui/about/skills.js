'use client';

import { motion } from 'framer-motion';

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

        <h2 className='text-2xl font-semibold mt-8 mb-4'>What I Do</h2>
        <ul className='space-y-2'>
          <li>Design and develop responsive web applications</li>
          <li>Create efficient and scalable backend solutions</li>
          <li>Implement AI-driven features and functionalities</li>
          <li>Build modern user interfaces with React and Next.js</li>
          <li>Optimize applications for maximum performance</li>
        </ul>

        <h2 className='text-2xl font-semibold mt-8 mb-4'>Technical Skills</h2>
        <div className='grid grid-cols-2 gap-4 mb-6'>
          <div>
            <h3 className='font-medium mb-2'>Frontend</h3>
            <ul className='space-y-1'>
              {skills.frontend.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='font-medium mb-2'>Backend</h3>
            <ul className='space-y-1'>
              {skills.backend.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
