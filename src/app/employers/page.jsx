import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import NexCuraEmployerDashboard from "@/nexcuracomponents/EmployersPage";
import React from "react";

function Employers() {
  return (
    <>
      <HealthcareHero
        title={"AI Wellness Intelligence for a Stronger Workforce"}
        description={
          "Use AI to uncover workforce health trends, improve engagement, and reduce absenteeism—while maintaining employee privacy and measuring ROI."
        }
        image={"/banners/employers.webp"}
        imgheight={"xl:h-[60vh]"}
        imgwidth={"xl:w-auto"}
        innerPadding={"lg:pt-4 lg:pb-0"}
      />
      <NexCuraEmployerDashboard />
    </>
  );
}

export default Employers;
