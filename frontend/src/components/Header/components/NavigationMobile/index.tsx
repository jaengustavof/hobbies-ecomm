"use client";
import { useState } from "react";
import type { NavigationProps } from "../../types";
import styles from "./NavigationMobile.module.scss";

export default function NavigationMobile({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubmenu = (menu: string) =>
    setOpenSubmenu((prev) => (prev === menu ? null : menu));

  return (
    <nav className={`${styles.nav} ${className || ""}`}>
      {/* Burger button */}
      <button
        className={`${styles.burger} ${isOpen ? styles["burger--active"] : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay menu */}
      <div
        className={`${styles.menu} ${isOpen ? styles["menu--open"] : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <ul className={styles.menu__list} onClick={(e) => e.stopPropagation()}>
          <li className={styles.menu__item}>
            <a href="/">Home</a>
          </li>

          <li
            className={`${styles.menu__item} ${styles["menu__item--hasSub"]}`}
          >
            <button onClick={() => toggleSubmenu("products")}>
              Products
              <span
                className={`${styles.arrow} ${
                  openSubmenu === "products" ? styles["arrow--open"] : ""
                }`}
              />
            </button>

            {openSubmenu === "products" && (
              <ul className={styles.submenu}>
                <li className={styles.submenu__item}>
                  <a href="/results?category=wooden-kits">Wooden Kits</a>
                </li>
                <li className={styles.submenu__item}>
                  <a href="/results?category=mechanical-models">
                    Mechanical Models
                  </a>
                </li>
                <li className={styles.submenu__item}>
                  <a href="/results?category=miniature-houses">
                    Miniature Houses
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.menu__item}>
            <a href="/about">About Us</a>
          </li>

          <li className={styles.menu__item}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
