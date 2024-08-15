"use client"

import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About The Hunting Coder</h1>
      <p className={styles.description}>
        This website is designed by{" "}
        <span style={{ fontWeight: "bold", color: " rgb(43, 247, 12)" }}>
          Harsh Mishra
        </span>
        , the author. It has blogs for hunting coders who are hunting for
        skills.{" "}
        He is
         a Software Development Intern at SecureU and ex-SDE Intern at Kickdrum India and TA at ApnaCollege,and  has worked on several
        impactful projects such as:
      </p>

      <ul className={styles.projectList}>
        <li>
          Developing a Multi-Tenant Internet Booking Engine using Spring Boot,
          React, Java, and AWS, improving system efficiency by 40%.
        </li>
        <li>
          Creating a Python-Based Face Recognition Attendance System, increasing
          accuracy and reducing manual entry errors by over 40%.
        </li>
        <li>
          Building a Real-Time Stock Market Application using React, Node.js,
          and WebSocket, providing seamless user experience and real-time
          updates.
        </li>
        <li>
          Developing Hi5, a Real-Time Chat Application with Node.js, Socket.io,
          HTML, CSS, and JavaScript, enhancing user engagement.
        </li>
        <li>
          Mentoring as a Teaching Assistant at Apna College, guiding students in
          Data Structures and Algorithms (DSA) and software development.
        </li>
      </ul>
      <div className={styles.profile}>
        <Image
          src="/profileb.jpg" // Ensure this image is in your public folder
          alt="Harsh Mishra"
          objectFit="cover"
          width={660}
          height={770}
          style={{
            borderRadius: "30px",
            boxShadow: "0 4px 8px rgba(36, 217, 103, 0.1)",
            border: "4px solid rgb(43, 247, 12) ",
            margin: "3rem",
          }}
        />
        <div className={styles.profileDetails} style={{display:"flex",gap:"1rem"}}>
          <p className={styles.profileTitle} style={{ color: "skyblue" }}>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mishraharsh-hmc/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "rgb(43, 247, 12)")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Harsh Mishra
            </a>
          </p>
          <p className={styles.profileTitle} style={{ color: "skyblue" }}>
            GitHub:{" "}
            <a
              href="https://github.com/HARSHMISHRA-521"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "rgb(43, 247, 12)")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              HARSHMISHRA-521
            </a>
          </p>
          <p className={styles.profileTitle} style={{ color: "skyblue" }}>
            Portfolio:{" "}
            <a
              href="https://harshmishra-521.github.io/MY-PORTFOLIO/#about"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "rgb(43, 247, 12)")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              My Portfolio
            </a>
          </p>
          <p style={{ color: "skyblue" }}>
            Resume:{" "}
            <a
              href="https://drive.google.com/drive/folders/1pGK1alOqsBhG7oRoVjr_QeOQf72o4TzL"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.color = "rgb(43, 247, 12)")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              View Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
