import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import BlogMainPage from "@/blogscomponents/BlogMain";
import React from "react";

function Blogs() {
  return (
    <>
      <HealthcareHero
        title={"Health Blogs"}
        description={
          "Explore the latest trends in healthcare, from cutting-edge treatments to holistic wellness approaches. Stay informed, inspired, and empowered to take charge of your health journey with our informative articles and resources."
        }
        image={"/blogs/blog-header.png"}
        imgheight={"xl:h-[60vh]"}
        imgwidth={"xl:w-auto"}
        innerPadding={"lg:pt-8 lg:pb-0"}
      />
      <BlogMainPage />
    </>
  );
}

export default Blogs;
