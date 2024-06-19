// File: app/blogpost/[slug]/page.js

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SlugPage = () => {
  const params = useParams();
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (params.slug) {
      setSlug(params.slug);
    }
  }, [params.slug]);

  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Slug: {slug}</h1>
      <p>This is the dynamic page for slug: {slug}</p>
    </div>
  );
};

export default SlugPage;
