import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Container } from '../ui/containers';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className='fixed w-full z-50 py-2 shadow-sm bg-blue-100 dark:bg-dark'>
      <Container className='flex flex-col justify-between items-center'>
        <div className='flex items-center '>
          <Link href='/'>
            <a className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'>
              RP
            </a>
          </Link>
        </div>
        <div className='flex'>
          <Link href='/#about'>
            <a className='px-4 py-2 text-sm font-medium hover:font-bold'>
              About
            </a>
          </Link>
          <Link href='/#experience'>
            <a className='px-4 py-2 text-sm font-medium hover:font-bold'>
              Experience
            </a>
          </Link>
          <Link href='/#projects'>
            <a className='px-4 py-2 text-sm font-medium hover:font-bold'>
              Projects
            </a>
          </Link>
          <button
            className='p-2 text-sm font-bold hover:font-bold'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '🔆' : '🌙'}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
