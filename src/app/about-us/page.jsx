import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import OurPromise from "@/aboutcomponents/OurPromise";
import VerticalTimeline from "@/aboutcomponents/VerticalTimeline";
import React from "react";

function AboutUs() {
  return (
    <>
      <HealthcareHero
        title={"Company Background"}
        description={
          "Founded by a team of passionate healthcare innovators and AI technology experts. GenAI HealthCare has evolved from a visonary idea to a leading force in AI-driven health solutions. We believe in a future where individuals have access to accurate medical data and can then create remedial solutions to help imporove quality of life."
        }
        image={"/banners/banner_img4.png"}
        height={"76vh"}
      />
      <OurPromise />
      <VerticalTimeline />
    </>
  );
}

export default AboutUs;
