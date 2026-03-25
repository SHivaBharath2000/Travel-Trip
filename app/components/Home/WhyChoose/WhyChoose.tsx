import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import WhyChooseCard from "./WhyChooseCard";

export const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeading
        heading="Why Choose us"
        description="At our core, we believe that every traveler deserves a seamless and memorable experience. We bridge the gap between quality and affordability, offering a curated platform where finding your perfect stay is quick, secure, and completely hassle-free. From transparent pricing to around-the-clock support, we are dedicated to making your travel dreams a reality"
      />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price"
            description="We offer competitive rates and exclusive deals to ensure you get the best value for your money."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy & Quick Booking"
            description="Our seamless booking process lets you reserve your stay in just a few clicks, saving you time."
          />
        </div>
        <div
        data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Care 24/7"
            description="Our dedicated support team is available around the clock to assist you with any queries or needs."
          />
        </div>
      </div>
    </div>
  );
};
