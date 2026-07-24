import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://chantreahan.netlify.app";
const siteName = "Chantrea Han Portfolio";
const socialImage = `${siteUrl}/CT.png`;

const pageMetadata = {
  "/": {
    title: "Chantrea Han | Web Developer Portfolio",
    description: "Chantrea Han is a web developer in Phnom Penh creating responsive, accessible websites and full-stack web applications.",
  },
  "/about": {
    title: "About Chantrea Han | Web Developer",
    description: "Learn about Chantrea Han, a web development student in Phnom Penh focused on frontend, backend, UI/UX, and accessible digital experiences.",
  },
  "/education": {
    title: "Education & Training | Chantrea Han",
    description: "Explore Chantrea Han's web development education, technical training, design workshops, and professional certifications.",
  },
  "/projects": {
    title: "Web Development Projects | Chantrea Han",
    description: "Browse web development projects by Chantrea Han, including responsive websites, ecommerce experiences, and full-stack applications.",
  },
  "/contact": {
    title: "Contact Chantrea Han | Web Developer",
    description: "Contact Chantrea Han in Phnom Penh to discuss web development opportunities, collaborations, and digital projects.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chantrea Han",
  url: siteUrl,
  image: socialImage,
  jobTitle: "Web Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phnom Penh",
    addressCountry: "KH",
  },
  sameAs: [
    "https://github.com/hanchantrea38",
    "https://www.linkedin.com/in/chantrea-han/",
  ],
  knowsAbout: [
    "Frontend Development",
    "Backend Development",
    "Responsive Web Design",
    "UI/UX Design",
    "JavaScript",
    "React",
  ],
};

function setMeta(selector, attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${selector}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content ?? value);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const metadata = pageMetadata[normalizedPath] ?? pageMetadata["/"];
    const canonicalUrl = `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;

    document.title = metadata.title;
    setMeta("description", "name", null, metadata.description);
    setMeta("robots", "name", null, "index, follow, max-image-preview:large");
    setMeta("og:title", "property", null, metadata.title);
    setMeta("og:description", "property", null, metadata.description);
    setMeta("og:type", "property", null, "website");
    setMeta("og:site_name", "property", null, siteName);
    setMeta("og:url", "property", null, canonicalUrl);
    setMeta("og:image", "property", null, socialImage);
    setMeta("og:image:alt", "property", null, "Portrait of web developer Chantrea Han");
    setMeta("twitter:card", "name", null, "summary_large_image");
    setMeta("twitter:title", "name", null, metadata.title);
    setMeta("twitter:description", "name", null, metadata.description);
    setMeta("twitter:image", "name", null, socialImage);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    let structuredData = document.head.querySelector('script[data-seo="person"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.setAttribute("type", "application/ld+json");
      structuredData.setAttribute("data-seo", "person");
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(personSchema);
  }, [pathname]);

  return null;
}
