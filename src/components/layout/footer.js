import Link from 'next/link';
import { siteName } from '@/../site-config';
import { Container } from '@/components/ui/containers';
import { cn } from '@/utils/shadcn';
import { AnimatedEmoji } from '@/components/ui/animated-emoji';

const footerLinks = [
  { href: 'https://aitools.fyi', label: 'aitools.fyi' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

/**
 * Footer component that displays copyright information and a link.
 * Renders at the bottom of every page with a top border.
 * @component
 * @returns {JSX.Element} Footer component with copyright text and link
 */
const Footer = () => {
  return (
    <footer className='border-t bg-background'>
      <Container className='flex flex-col items-center justify-center py-4 gap-2'>
        <p className='text-sm'>
          © {new Date().getFullYear()}{' '}
          <Link
            href='/'
            className={cn(
              'font-medium underline-offset-4 transition-colors hover:underline',
              'hover:text-primary',
            )}>
            {siteName}
          </Link>
          . All Rights Reserved.
        </p>
        <div className='flex items-center gap-4 text-sm'>
          {footerLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'hover:text-primary transition-colors',
                'hover:underline underline-offset-4',
              )}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className='text-sm flex items-center gap-1'>
          Made with{' '}
          <AnimatedEmoji
            emoji='💜'
            label='love'
            className='text-primary animate-pulse hover:animate-none'
          />{' '}
          by Rishit Patel in Canada{' '}
          <AnimatedEmoji
            emoji='🍁'
            label='maple leaf'
            className='hover:animate-bounce'
          />
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
