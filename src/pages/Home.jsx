import React from "react";
import Blogs from "../sections/Blogs";
import Counter from "../sections/Counter";
import Footer from "../sections/Footer";
import GeneralSection from "../sections/GeneralSection";
import Greeting from "../sections/Greeting";
import JoinUs from "../sections/JoinUs";
import OurMenu from "../sections/OurMenu";
import Reviews from "../sections/Reviews";
import Special from "../sections/Special";

function Home() {
  return (
    <>
      <Greeting greetingClassName="greeting-section" />
      <GeneralSection
        generalSectionTitle="about us"
        generalSectionSubTitle="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
        generalSectionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
        generalSectionImg="/assets/aboutUs.png"
        generalSectionAlt="About Us"
      />
      <Special />
      <OurMenu />
      <JoinUs
        joinUsTitle="Come join us for a lunch this weekend and enjoy"
        flatOff="10"
      />
      <GeneralSection
        generalSectionTitle="Cooking ingredients"
        generalSectionSubTitle="What goes in"
        generalSectionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
        generalImgClass="cooking-img"
        generalSectionImg="/assets/cooking.png"
        generalSectionAlt="Cooking ingredients"
      />
      <Counter />
      <Reviews />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
