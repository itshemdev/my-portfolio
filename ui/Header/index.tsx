"use client";

import { FC, useState } from "react";
import Link from "next/link";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  interface ILink {
    link: string;
    name: string;
  }

  const links: ILink[] = [
    {
      link: "/",
      name: "Home",
    },
  ];

  return (
    <header className="flex justify-between items-center h-10">
      <Link href={"/"} className="text-2xl">
        hem.
      </Link>

      {/* <div className="w-10 aspect-square bg-black"></div> */}
    </header>
  );
};

export default Header;
