// pages/_app.tsx
import React, { Suspense } from "react";
import { AppProps } from "next/app";
import { AbilityProvider } from "../_components/AbilityContext";
import HOme from ".";

function MyApp() {
  const userRole = "admin";

  return (
    <Suspense fallback={"Loading..."}>
      <AbilityProvider role={userRole}>
        <HOme />
      </AbilityProvider>
    </Suspense>
  );
}

export default MyApp;
