type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`relative p-5 rounded-3xl bg-[#222] w-full z-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
