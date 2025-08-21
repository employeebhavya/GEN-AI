import CoreValuesConstellation from "@/aboutcomponents/CoreValuesConstellation";
import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import MissionVision from "@/aboutcomponents/MissionVision";

import React from "react";

function page() {
  return (
    <>
      <HealthcareHero
        title={"Core Values That Define Us"}
        description={
          "We're pioneering a new standard in health guidance, using individual health data to craft highly personalized health plans. Our AI-driven approach means each recommendation is uniquely suited to your personal health profile."
        }
        image={"/banners/banner_img5.png"}
        height={"74vh"}
      />
      <MissionVision />
      <CoreValuesConstellation />
    </>
  );
}

export default page;
