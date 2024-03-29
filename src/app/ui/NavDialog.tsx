"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const NavDialog = ({ closeModal }: { closeModal: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const checkClickOutside = (e: MouseEvent) => {
    if (modalRef.current && modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

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
      <div
        id="nav_dialog"
        className="fixed inset-0 lg:hidden"
        aria-hidden={mounted ? "true" : "false"}
      >
        {/* Dialog overlay */}
        <div ref={modalRef} className="fixed inset-0 bg-black/40" />
        {/* Dialog content */}
        <nav className="fixed top-16 right-6 w-full max-w-xs bg-white rounded-lg text-black font-semibold">
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
