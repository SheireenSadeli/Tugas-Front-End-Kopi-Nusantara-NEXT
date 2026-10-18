"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useShop } from "./ShopProvider";

const links = [
  { href: "#hero-banner", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const { cartOpen, setCartOpen, searchQuery, setSearchQuery } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  function toggleSearch() {
    const next = !searchOpen;
    setSearchOpen(next);
    if (next) searchRef.current?.focus();
  }

  function toggleCart() {
    setCartOpen(!cartOpen);
    setSearchOpen(false);
  }

  return (
    <nav className="nav-menu">
      <div className="left-menu">
        <Image src="/img/biji-kopi.jpg" alt="Logo" width={575} height={434} />
        <p>KOPI NUSANTARA</p>
        <ul className={`left-menu-show${menuOpen ? " show" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={activeLink === link.href ? "active" : undefined}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-menu">
        <ul className="right-menu-show">
          <li>
            <a
              href="#"
              id="searching"
              aria-label="Cari kopi"
              onClick={(e) => {
                e.preventDefault();
                toggleSearch();
              }}
            >
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              id="shopping-cart"
              aria-label="Keranjang"
              onClick={(e) => {
                e.preventDefault();
                toggleCart();
              }}
            >
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Menu"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(!menuOpen);
              }}
            >
              <i className="fas fa-bars fa-2x"></i>
            </a>
          </li>
        </ul>

        <div className={`search-button${searchOpen ? " active" : ""}`}>
          <input
            ref={searchRef}
            type="search"
            id="search-box"
            placeholder="Cari kopi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}
