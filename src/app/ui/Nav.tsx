"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavDialog from "@/app/ui/NavDialog";
import Hamburger from "@/app/ui/Hamburger";

const Nav = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="flex h-14 xl:h-20 max-w-6xl mx-auto items-center justify-between">
      <Link href="/" aria-label="Crowdfund - Home">
        <Image
          src="/assets/logo.svg"
          width={128}
          height={20}
          alt="crowdfund logo"
        />
      </Link>

      <nav>
        <Hamburger
          isOpened={isExpand}
          handleClick={() => setIsExpand((prev) => !prev)}
        />
        <ul className="hidden lg:flex space-x-8 items-center text-white">
          <li>
            <Link href="/" className="hover:text-cyan-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-cyan-400">
              Discover
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-cyan-400">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
      {isExpand && <NavDialog closeModal={() => setIsExpand(false)} />}
    </div>
  );
};

export default Nav;
