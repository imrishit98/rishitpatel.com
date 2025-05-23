'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CloseIcon, MenuIcon } from '../ui/icons/menus';

/**
 * Responsive navigation menu component with mobile toggle functionality.
 * Displays horizontal menu on desktop and hamburger menu on mobile.
 * @component
 * @returns {JSX.Element} Navigation menu with responsive behavior
 */
const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: 'https://x.com/imrishit98', label: 'Contact' },
    { href: 'https://github.com/imrishit98/rishitpatel.com', label: 'Source Code' },
  ];

  return (
    <>
      <div className='hidden md:flex'>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className='px-4 py-2 text-sm font-medium hover:font-bold'
            {...(link.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className='md:hidden'>
        <button
          className='p-2'
          type='button'
          aria-label='Toggle menu'
          onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div
          className={`absolute right-0 w-full bg-white shadow-md py-2 px-4 mt-2 rounded-md ${
            isMenuOpen ? 'block' : 'hidden'
          }`}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='block px-4 py-2 text-sm font-medium hover:font-bold'
              onClick={() => setIsMenuOpen(false)}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavMenu;
