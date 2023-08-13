import { createBrowserRouter } from "react-router-dom";
import paths from "./paths";
import { Suspense, lazy } from "react";
import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";

// lazy load routes
const WorkDetailPage = lazy(() => import("../pages/Work/WorkDetailPage"));

const router = createBrowserRouter([
  {
    path: paths.main.base.path,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BasePage />
      </Suspense>
    ),
    children: [
      {
        path: paths.main.home.path,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: `${paths.main.works.path}/:slug`,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WorkDetailPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
