import React, { lazy, Suspense } from "react";

const MyFeature = lazy(() =>
  Promise.all([
    import("./MyFeature/MyFeature"),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }),
  ]).then(([m]) => m)
);

function MyPage() {
  return (
    <>
      <h1>My Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFeature />
      </Suspense>
    </>
  );
}

export default MyPage;
