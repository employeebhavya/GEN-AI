import AiDriven from "@/homecomponents/AiDriven";
import CallToAction from "@/homecomponents/CallToAction";
import Collaborate from "@/homecomponents/Collaborate";
import Hero from "@/homecomponents/Hero";
import HomeAbout from "@/homecomponents/HomeAbout";
import HomeIconBoxex from "@/homecomponents/HomeIconBoxex";
import Nexcura from "@/homecomponents/Nexcura";
import PartneringScroll from "@/homecomponents/PartneringScroll";
import Stats from "@/homecomponents/Stats";
import Testimonial from "@/homecomponents/Testimonial";
import WorldClassTreatment from "@/homecomponents/WorldClassTreatment";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <PartneringScroll />
      <HomeAbout />
      <HomeIconBoxex />
      <Collaborate />
      <AiDriven />
      <WorldClassTreatment />
      <Stats />
      <Nexcura />
      <Testimonial />
      <CallToAction />
    </div>
  );
}

export default page;
