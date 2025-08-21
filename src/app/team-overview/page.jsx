import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import TeamMosaic from "@/aboutcomponents/TeamMosaic";

import React from "react";

function page() {
  return (
    <>
      <HealthcareHero
        title={"Shaping Leaders to Drive Change"}
        description={
          "Leadership is about creating impact, empowering others, and driving change. Our commitment is to nurture leaders who rise to challenges and deliver outstanding results with integrity and purpose."
        }
        image={"/banners/banner_img.png"}
        height={"76vh"}
        imgheight={"h-[300px]"}
      />
      <TeamMosaic />
    </>
  );
}

export default page;
