const Main = ({ children }) => {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-blue-100 dark:bg-dark'>
      {children}
    </main>
  );
};

export default Main;
