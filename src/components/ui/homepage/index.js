'use client';
import { Button } from '@/shadcn/ui/button';
import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
};

const stats = [
  '100K+ users across projects',
  '500K+ monthly page views',
  'Millions in revenue generated',
  'Directories, SaaS, pSEO, and more',
];

const socialLinks = [
  {
    href: 'https://twitter.com/imrishit98',
    icon: Twitter,
    label: 'Twitter',
    hoverColor: 'hover:text-[#1DA1F2]',
  },
  {
    href: 'https://github.com/imrishit98',
    icon: Github,
    label: 'GitHub',
    hoverColor: 'hover:text-[#333333] dark:hover:text-white',
  },
  {
    href: 'https://linkedin.com/in/imrishit98',
    icon: Linkedin,
    label: 'LinkedIn',
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    href: 'https://instagram.com/imrishit98',
    icon: Instagram,
    label: 'Instagram',
    hoverColor: 'hover:text-[#E4405F]',
  },
  {
    href: 'https://tally.so/r/nGX6Bz',
    icon: Mail,
    label: 'Email',
    hoverColor: 'hover:text-[#EA4335]',
  },
];

const SocialButton = ({ href, Icon, label, hoverColor }) => (
  <Link
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className={`inline-flex items-center justify-center rounded-md h-10 w-10 hover:bg-accent transition-colors duration-200 ${hoverColor}`}>
    <Icon className='h-5 w-5 transition-colors duration-200' />
    <span className='sr-only'>{label}</span>
  </Link>
);

const HomeAnimationDiv = () => {
  return (
    <motion.div
      variants={animations.container}
      initial='hidden'
      animate='show'
      className='space-y-8 py-12 xl:py-16'>
      <motion.div
        variants={animations.item}
        className='space-y-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
          Hey, I'm Rishit Patel
        </h1>
        <p className='text-xl md:text-2xl text-muted-foreground'>
          I build awesome things for the web using AI and some 300+ IQ 🧠
        </p>
      </motion.div>

      <motion.div
        variants={animations.item}
        className='space-y-4'>
        <ul className='space-y-3'>
          {stats.map(text => (
            <li
              key={text}
              className='flex items-center gap-3 hover:translate-x-2 transition-transform duration-200'>
              <span className='h-2 w-2 bg-primary rounded-full animate-pulse' />
              <span className='text-lg font-medium text-foreground/90'>{text}</span>
            </li>
          ))}
        </ul>
        <div className='flex gap-4'>
          <Button asChild>
            <Link href='/about'>
              About Me <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
          <Button
            variant='outline'
            asChild>
            <Link href='/projects'>My Work</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div variants={animations.item}>
        <h2 className='text-lg font-semibold mb-4'>Let's Connect</h2>
        <div className='flex gap-4'>
          {socialLinks.map(({ href, icon: Icon, label, hoverColor }) => (
            <SocialButton
              key={href}
              href={href}
              Icon={Icon}
              label={label}
              hoverColor={hoverColor}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeAnimationDiv;
