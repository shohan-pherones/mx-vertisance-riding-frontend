interface WrapperProps {
  children: React.ReactNode;
  id?: string;
}

const Wrapper = ({ children, id }: WrapperProps) => {
  return (
    <section
      id={id}
      className="container mx-auto px-5 md:px-10 py-10 md:py-16 flex flex-col gap-5 md:gap-10"
    >
      {children}
    </section>
  );
};

export default Wrapper;
