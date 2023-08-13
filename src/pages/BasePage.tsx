import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import ContactSection from "../components/Contact/ContactSection";
import { Element } from "react-scroll";
const BasePage = () => {
  return (
    <main className="relative text-gray-900 dark:text-gray-50
    bg-green-50 dark:bg-gray-900">
      <Navigation />
      <Outlet />
      <Element name="contact">
        {" "}
        <ContactSection />
      </Element>
    </main>
  );
};

export default BasePage;
