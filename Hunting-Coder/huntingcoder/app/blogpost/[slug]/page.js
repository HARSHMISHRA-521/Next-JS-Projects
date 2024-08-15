"use client";
import styles from "../blogpost.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../Loader";


const SlugPage = () => {
  const params = useParams();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (params.slug) {
      setSlug(params.slug);
    }
  }, [params.slug]);

 if (!slug) {
   return (
     <div className={styles.loaderContainer}>
       <Loader />
     </div>
   );
 }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3>Title of the page : {slug}</h3>
        <p>
          This is the dynamic page for slug: {slug} .Created to learn and use
          the dynamic content loading in NextJS
        </p>
      </main>
    </div>
  );
};

export default SlugPage;
