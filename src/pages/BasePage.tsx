import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const BasePage = () => {
  return (
    <main className="relative text-gray-900 dark:text-gray-50">
      <Navigation />
      <Outlet />
    </main>
  );
};

export default BasePage;
