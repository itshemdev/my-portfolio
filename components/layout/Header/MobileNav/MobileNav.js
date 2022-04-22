import Link from "next/link";

const MobileNav = ({ isOpen, navLinks, handleClick }) => {
  return (
    <nav className={`nav--mobile ${isOpen ? "open" : ""}`}>
      <div className="navlinks">
        {navLinks.map((navlink, index) => (
          <Link key={index} href={navlink.href}>
            <a onClick={handleClick}>{navlink.title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
