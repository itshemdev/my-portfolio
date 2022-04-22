import { useState } from "react";
import Link from "next/link";

import Hamburger from "./Hamburger/Hamburger";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "About me", href: "/about" },
    { title: "My works", href: "/works" },
    { title: "Let's work together", href: "/contact" },
  ];

  const handleClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <header className="header">
      <Link href="/">
        <a
          className="logo"
          style={isOpen ? { color: "white" } : { color: "black" }}
        >
          Hem
        </a>
      </Link>

      {/* PC Menu */}
      <DesktopNav navLinks={navLinks}></DesktopNav>

      {/* Hamburger menu */}
      <Hamburger isOpen={isOpen} handleClick={handleClick}></Hamburger>

      {/* Mobile Menu */}
      <MobileNav
        isOpen={isOpen}
        navLinks={navLinks}
        handleClick={handleClick}
      ></MobileNav>

      <style jsx global>{`
        body {
          ${isOpen ? "overflow-y: hidden;" : "overflow-y: scroll;"}
        }
      `}</style>
    </header>
  );
};

export default Header;
