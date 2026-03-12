const Container = ({ children, className = "" }) => {
  return <div className="mx-auto w-full max-w-[1440px]">{children} </div>;
};

export default Container;
