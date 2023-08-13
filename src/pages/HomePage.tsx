import BlogSection from "../components/Blog/BlogSection";
 
import Hero from "../components/Hero/Hero"; 
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
     
    </>
  );
};

export default HomePage;
