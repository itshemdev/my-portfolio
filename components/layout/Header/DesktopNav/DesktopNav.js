import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const DesktopNav = ({ navLinks }) => {
  const position = useSelector((state) => state.scrollPosition.top);
  const [color, setColor] = useState("white");

  const router = useRouter();
  console.log(router.pathname);

  useEffect(() => {
    if (position >= window.innerHeight) {
      setColor("black");
    } else {
      setColor("white");
    }
  }, [position]);

  return (
    <nav className="nav--desktop">
      {navLinks.map((navlink, index) => (
        <Link key={index} href={navlink.href}>
          <a
            style={{ color: `${color}` }}
            className={`navlink ${
              router.pathname == navlink.href ? "active" : ""
            } ${router.pathname == "/" ? "" : "setblack"}`}
          >
            {navlink.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};
export default DesktopNav;
