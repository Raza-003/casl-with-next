// AbilityContext.tsx
"use client";

import { createContext, ReactNode, useContext } from "react";
import { AppAbility, defineAbilitiesFor } from "@/app/_components/Abilities";

const AbilityContext = createContext<AppAbility>(defineAbilitiesFor(""));

export const AbilityProvider = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const ability = defineAbilitiesFor(role);
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
};

export function useAbility() {
  return useContext(AbilityContext);
}
