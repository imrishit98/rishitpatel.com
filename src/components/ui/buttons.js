import Link from 'next/link';

export const SocialIconBtn = ({ link, className, children }) => {
  return (
    <Link href={link}>
      <a
        target='_blank'
        rel='noopener noreferrer'
        className={'p-1 w-8 rounded-sm ' + className}
      >
        {children}
      </a>
    </Link>
  );
};
