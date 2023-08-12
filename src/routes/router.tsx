import { createBrowserRouter } from "react-router-dom";
import paths from "./paths";
import { Suspense } from "react";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: paths.main.home.path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
]);

export default router;
