import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      href: "/blog",
    },
    {
      id: 4,
      title: "About",
      href: "/about",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      href: "/dashboard",
    },
  ];
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">METAN</Link>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <Link className={styles.link} key={link.id} href={link.href}>
              {link.title}
            </Link>
          );
        })}
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
