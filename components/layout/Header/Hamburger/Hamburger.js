const Hamburger = ({ isOpen, handleClick }) => {
  return (
    <div
      className={`hamburger__wrapper ${isOpen ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="line line--1"></div>
      <div className="line line--2"></div>
    </div>
  );
};

export default Hamburger;
