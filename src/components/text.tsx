type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

const Text = ({ children, className }: TextProps) => {
  return (
    <p className={`opacity-80 leading-[1.6] text-sm ${className}`}>
      {children}
    </p>
  );
};

export default Text;
