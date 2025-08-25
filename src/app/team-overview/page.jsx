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
        image={"/about/team.png"}
        imgheight={"xl:h-full"}
        imgwidth={"xl:w-auto"}
        innerPadding={"lg:pt-4 lg:pb-0"}
      />
      <TeamMosaic />
    </>
  );
}

export default page;
