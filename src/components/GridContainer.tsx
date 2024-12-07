import { PropsWithChildren } from "react";

const GridContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-10">
      {children}
    </div>
  );
};

export default GridContainer;
