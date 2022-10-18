const Section = ({ className = '', children }) => {
  return (
    <section className={'w-full py-10 md:py-14' + className}>
      {children}
    </section>
  );
};

export default Section;
