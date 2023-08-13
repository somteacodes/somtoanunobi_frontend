import React, { lazy, Suspense } from "react";

const LazyLoadRoute = (componentName: string) => {
  const LazyElement = lazy(() => import(`../routes/${componentName}.tsx`));
  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
};

export default LazyLoadRoute;
