type CardTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const CardTitle = ({ children, className }: CardTitleProps) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export default CardTitle;
