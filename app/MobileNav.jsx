"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#archive", label: "Archive" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
];

export default function MobileNav() {
  const detailsRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsidePointer(event) {
      if (!detailsRef.current?.contains(event.target)) {
        detailsRef.current.open = false;
      }
    }

    function closeOnEscape(event) {
      if (event.key !== "Escape") return;
      detailsRef.current.open = false;
      detailsRef.current.querySelector("summary")?.focus();
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <details
      className="mobile-nav"
      ref={detailsRef}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label={open ? "Close navigation" : "Open navigation"}>
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </summary>
      <nav
        className="mobile-nav-panel"
        aria-label="Mobile navigation"
        onClick={() => {
          detailsRef.current.open = false;
        }}
      >
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
        <a href="mailto:atasatti20@gmail.com">
          Email me <span aria-hidden="true" className="arrow" />
        </a>
      </nav>
    </details>
  );
}
