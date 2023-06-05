"use client";
import React, { useEffect } from "react";
import HomePresentation from "./components/home";
import NavBar from "./components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./components/aboutme";
import Stack from "./components/stack";
import Form from "./components/form";
import Experience from "./components/experience";
import Project from "./components/project";
import Footer from "./components/footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-bglight dark:bg-bgdark">
      <NavBar />
      <div className="bg-bglight dark:bg-bgdark flex flex-col mx-6 md:mx-0 gap-10 md:gap-20  mb-8 mt-3">
        <HomePresentation />
        <AboutMe />
        <Experience />
        <Project />
        <Stack />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
