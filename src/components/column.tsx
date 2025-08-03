type ColumnProps = {
  children?: React.ReactNode;
  className?: string;
};

const Column = ({ children, className }: ColumnProps) => {
  return (
    <div className={`flex flex-col gap-4 w-full md:w-1/2 ${className}`}>
      {children}
    </div>
  );
};

export default Column;
