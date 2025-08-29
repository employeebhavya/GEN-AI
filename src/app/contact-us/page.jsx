import HealthcareHero from "@/aboutcomponents/HealthcareHero";
import ContactPage from "@/contactcomponents/ContactMainPageNew";
import React from "react";

function ContactUs() {
  return (
    <div>
      <HealthcareHero
        title={"Contact Nexcura"}
        description={
          "Ready to transform your healthcare experience? Get in touch with our team of experts and discover how Nexcura can revolutionize your healthcare journey with AI-driven solutions."
        }
        image={"/banners/contact.webp"}
        imgheight={"xl:h-[60vh]"}
        imgwidth={"xl:w-auto"}
        innerPadding={"lg:pt-4 lg:pb-0"}
        isVisible={"hidden"}
      />
      <ContactPage />
    </div>
  );
}

export default ContactUs;
