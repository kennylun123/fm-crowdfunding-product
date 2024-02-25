"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavDialog from "@/app/ui/NavDialog";

const Nav = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    // Navigation menu
    <div className="flex h-14 xl:h-20 max-w-6xl mx-auto items-center justify-between">
      <Link href="/" aria-label="Crowdfund - Home">
        <Image
          src="/assets/logo.svg"
          width={128}
          height={20}
          alt="crowdfund logo"
        />
      </Link>
      <button
        className="lg:hidden"
        onClick={() => setIsExpand((prevState) => !prevState)}
        aria-label="Toggle navigation menu"
        aria-expanded={isExpand ? "true" : "false"}
      >
        <Image
          src={
            isExpand
              ? "/assets/icon-close-menu.svg"
              : "/assets/icon-hamburger.svg"
          }
          width={16}
          height={15}
          alt="navigation menu button"
        />
      </button>
      <nav className="hidden lg:flex text-white items-center">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="hover:text-cyan-400"
              aria-label="Crowdfund - About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-cyan-400"
              aria-label="Crowdfund - Discover"
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="hover:text-cyan-400"
              aria-label="Crowdfund - Get Started"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
      {/* Navigation menu list (Portal) */}
      {isExpand && <NavDialog closeModal={() => setIsExpand(false)} />}
    </div>
  );
};

export default Nav;
