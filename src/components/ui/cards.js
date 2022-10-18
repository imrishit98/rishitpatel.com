import Image from 'next/image';

export const JourneyCard = ({ imgSrc, imgAlt, children }) => {
  return (
    <div className='flex flex-col gap-2 w-full md:flex-row md:gap-10 md:items-center journey-card'>
      <div className='journey-image'>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={150}
          height={150}
          className='flex w-8 h-8 rounded-md'
        />
      </div>
      <div className='flex flex-col justify-start items-center md:items-start journey-text'>
        {children}
      </div>
    </div>
  );
};
