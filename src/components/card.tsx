type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`relative card p-5 rounded-3xl w-full z-10 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
