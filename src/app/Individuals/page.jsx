import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import NexCuraComponent from "@/nexcuracomponents/IndividualsPage";
import React from "react";

function page() {
  return (
    <>
      <HealthcareHero
        title={"AI That Transforms Your Health Data Into Daily Action"}
        description={
          "Our AI analyzes your sleep, movement, heart health, and more to give you a single, actionable score every day—helping you prevent issues before they arise."
        }
        image={"/banners/individuals.webp"}
        imgheight={"xl:h-[60vh]"}
        imgwidth={"xl:w-auto"}
        innerPadding={"lg:pt-4 lg:pb-0"}
      />
      <NexCuraComponent />
    </>
  );
}

export default page;
