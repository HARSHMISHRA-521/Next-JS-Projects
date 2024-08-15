import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://medium.com/@HARSHMISHRA_HMC/kickdrum-interview-experienece-on-campus-3f27c488cc95"
              }
            >
              <h3>KICKDRUM INTERVIEW EXPERIENCE(ON-CAMPUS)</h3>
            </Link>
            <p>
              Choose Kickdrum for an unbeatable on-campus interview experience
              to get ahead in your career. Don’t miss this chance to impress
              potential employers with your skills.
            </p>
          </div>
          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://medium.com/@HARSHMISHRA_HMC/mastering-authorization-and-authentication-with-spring-security-ed9b1511427e"
              }
            >
              <h3>
                Mastering Authorization and Authentication With Spring Security
              </h3>
            </Link>
            <p>
              Adding security to your project is inevitable, and in the Spring
              ecosystem, this task is accomplished with the Spring Security
              library.
            </p>
          </div>

          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://medium.com/@HARSHMISHRA_HMC/unravelling-java-8-mastering-key-features-for-exceptional-development-9d24e2d06ef8"
              }
            >
              <h3>
                Unravelling Java 8: Mastering Key Features for Exceptional
                Development
              </h3>
            </Link>
            <p>
              In the ever-evolving landscape of Java programming, Java 8 emerges
              as a game-changer, introducing powerful features that redefine the
              way developers write code. In this comprehensive guide, we will
              delve into key Java 8 features, exploring their syntax,
              functionality, and real-world applications. Let’s embark on a
              journey to master these features and elevate your coding
              proficiency.
            </p>
          </div>

          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://medium.com/@HARSHMISHRA_HMC/level-up-your-github-profile-a-complete-guide-to-impress-recruiters-12e40c0137e6"
              }
            >
              <h3>
                Level Up Your GitHub Profile: A Complete Guide to Impress
                Recruiters
              </h3>
            </Link>
            <p>
              In today’s competitive tech landscape, a well-crafted GitHub
              profile is no longer just a plus — it’s a necessity. As
              developers, our GitHub profiles act as our digital portfolios,
              showcasing our skills, experience, and contributions to the
              open-source community. But how do we transform our profiles from
              basic to brilliant? Fear not, fellow developers, for this
              comprehensive guide will equip you with the knowledge and
              strategies to elevate your GitHub presence and impress potential
              employers.
            </p>
          </div>

          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://medium.com/@HARSHMISHRA_HMC/face-recognition-attendance-system-a-python-project-that-helped-me-stand-out-in-my-software-e995ca117a96"
              }
            >
              <h3>
                Face Recognition Attendance System: A Python Project That Helped
                Me Stand Out in My Software Developer Interview
              </h3>
            </Link>
            <p>
              Face recognition attendance systems are a popular and emerging
              technology that is being used in a variety of industries,
              including education, healthcare, and security. These systems offer
              a number of advantages over traditional attendance systems, such
              as fingerprint scanners and ID cards. Face recognition systems are
              more contactless, which can help to reduce the spread of germs.
              They are also more difficult to tamper with, as it is difficult to
              forge a face.
            </p>
          </div>

          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://medium.com/@HARSHMISHRA_HMC/cors-1d0b72b592f1"}
            >
              <h3>CORS</h3>
            </Link>
            <p>
              CORS🌐 Demystifying CORS: A Key Element of Web Security 🚀 Ever
              wondered how Cross-Origin Resource Sharing (CORS) works? 🤔 It’s a
              crucial aspect of web security that ensures safe data sharing
              between different domains. Let’s dive into the details:
            </p>
          </div>

          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://medium.com/@HARSHMISHRA_HMC/websockets-12646ce8de37"
              }
            >
              <h3>WebSockets</h3>
            </Link>
            <p>
              🚀 Unlocking the Power of WebSockets for Real-Time Web Apps 🌐 Are
              you ready to take your web development skills to the next level?
              Dive into the world of WebSockets, a game-changer for creating
              real-time web applications. 🌐
            </p>
          </div>

          <div className={styles.blogitem}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/blogpost/Learn-Dynamic-Content-Rendering"
            >
              <h3>BlogPosts </h3>
            </Link>
            <p>
              🚀 This is a demo blog written for learning the use of dynamic
              rendering of pages with the help of slug. 🌐
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default blog;
