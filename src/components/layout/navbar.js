import { siteName } from '@/../site-config';
import NavMenu from '@/components/layout/menu';
import { Container } from '@/components/ui/containers';
import { cn } from '@/utils/shadcn';

import Link from 'next/link';

/**
 * Navigation bar component that appears at the top of every page.
 * Contains logo/brand link and navigation menu.
 * @component
 * @returns {JSX.Element} Navigation bar with logo and menu
 */
const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <Container className='flex h-14 items-center justify-between'>
        <Link
          href='/'
          className={cn(
            'text-2xl font-bold tracking-tight hover:text-primary/90',
            'transition-colors duration-200',
          )}>
          {siteName}
        </Link>
        <NavMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
