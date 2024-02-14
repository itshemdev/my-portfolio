const Line = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full bg-black opacity-10 h-0.5 ${className}`}></div>
  );
};

export default Line;
