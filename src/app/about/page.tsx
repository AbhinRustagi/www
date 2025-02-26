import Button from "@/components/Button";
import generateMetadata from "@/lib/metadata";
import AboutPage from "@/components/pages/About";
import React from "react";

export const metadata = generateMetadata({
  title: "About Me",
  description:
    "I'm a software engineer with 3 years of experience, product intuition and acute curiosity.",
  canonical: "/about",
});

export default function About() {
  return (
    <React.Fragment>
      <div className="mb-8">
        <Button direction="backward" text="home" href="/" />
      </div>
      <AboutPage />
    </React.Fragment>
  );
}
