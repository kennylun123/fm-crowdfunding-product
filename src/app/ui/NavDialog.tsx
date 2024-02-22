"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type DialogProps = {
  closeModal: () => void;
};

const NavDialog = ({ closeModal }: DialogProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  function checkClickOutside(e: MouseEvent) {
    if (modalRef.current && modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  }

  useEffect(() => {
    // use mounted state to force this component to render on client browser only
    // maybe not the best practice
    setMounted(true);
    document.addEventListener("mousedown", checkClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
      setMounted(false);
    };
  }, [closeModal]);

  return (
    mounted &&
    createPortal(
      <div className="fixed inset-0 lg:hidden">
        {/* Dialog overlay */}
        <div ref={modalRef} className="fixed inset-0 bg-black/10" />
        {/* Dialog content */}
        <nav className="fixed top-16 right-6 w-full max-w-md bg-white rounded-lg text-black font-semibold">
          <ul className="divide-y divide-black/10">
            <li className="p-6">
              <Link href="/" className="hover:text-cyan-400">
                About
              </Link>
            </li>
            <li className="p-6">
              <Link href="/" className="hover:text-cyan-400">
                Discover
              </Link>
            </li>
            <li className="p-6">
              <Link href="/" className="hover:text-cyan-400">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>,
      document.body
    )
  );
};

export default NavDialog;
