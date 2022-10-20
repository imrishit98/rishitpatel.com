const Section = ({ className = '', children, ...props }) => {
  return (
    <section className={'w-full py-10 md:py-14' + className} {...props}>
      {children}
    </section>
  );
};

export default Section;
