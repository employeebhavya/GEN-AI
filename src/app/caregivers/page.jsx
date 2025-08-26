import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import NexCuraCaregiverHero from "@/nexcuracomponents/CareGiversPage";
import React from "react";

function page() {
  return (
    <>
      <HealthcareHero
        title={"AI-Powered Health Insights for Caregivers"}
        description={
          "Get real-time AI analysis of your loved one’s key health metrics, no matter where they are, so you can act early and stay connected with confidence."
        }
        image={"/banners/caregivers.png"}
        imgheight={"xl:h-[60vh]"}
        imgwidth={"xl:w-auto"}
        innerPadding={"lg:pt-4 lg:pb-0"}
      />
      <NexCuraCaregiverHero />
    </>
  );
}

export default page;
