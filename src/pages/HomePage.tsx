import BlogSection from "../components/Blog/BlogSection";
import ContactSection from "../components/Contact/ContactSection";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import WorkSection from "../components/Work/WorkSection";
import { Element } from "react-scroll";
const HomePage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Element name="home">
        <Hero />
      </Element>

      <Element name="work">
        <WorkSection />
      </Element>
      <Element name="blog">
        <BlogSection />
      </Element>
      <Element name="contact">
        {" "}
        <ContactSection />
      </Element>
    </>
  );
};

export default HomePage;
