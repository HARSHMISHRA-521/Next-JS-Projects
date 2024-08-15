"use client";

import React from "react";
import Link from "next/link";
import styles from "../app/page.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.mainnav}>
        <ul>
          <li
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => {
              e.target.style.color = "rgb(43, 247, 12)";
              e.target.style.textDecoration = "underline rgb(43, 247, 12)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.textDecoration = "none";
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => {
              e.target.style.color = "rgb(43, 247, 12)";
              e.target.style.textDecoration = "underline rgb(43, 247, 12)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.textDecoration = "none";
            }}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => {
              e.target.style.color = "rgb(43, 247, 12)";
              e.target.style.textDecoration = "underline rgb(43, 247, 12)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.textDecoration = "none";
            }}
          >
            <Link href="/blog">Blogs</Link>
          </li>
          <li
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => {
              e.target.style.color = "rgb(43, 247, 12)";
              e.target.style.textDecoration = "underline rgb(43, 247, 12)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "white";
              e.target.style.textDecoration = "none";
            }}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
