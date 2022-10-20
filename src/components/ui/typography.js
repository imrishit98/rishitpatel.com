export const H1 = ({ children }) => {
  return <h1 className='text-5xl font-semibold md:text-6xl'>{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className='text-4xl font-semibold md:text-5xl'>{children}</h2>;
};

export const H3 = ({ className, children }) => {
  return (
    <h3 className={'text-3xl font-semibold md:text-4xl ' + className}>
      {children}
    </h3>
  );
};

export const H4 = ({ children }) => {
  return <h4 className='text-2xl font-semibold md:text-3xl'>{children}</h4>;
};

export const H5 = ({ children }) => {
  return <h5 className={'text-xl font-semibold md:text-2xl'}>{children}</h5>;
};
