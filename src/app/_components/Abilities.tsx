// abilities.ts
import { PureAbility, AbilityBuilder, AbilityClass } from "@casl/ability";

type Actions = "read" | "update" | "delete";
type Subjects = "Post" | "all";

export type AppAbility = PureAbility<[Actions, Subjects]>;

export function defineAbilitiesFor(role: string) {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(
    PureAbility as AbilityClass<AppAbility>
  );

  if (role === "admin") {
    can("read", "Post" as const);
    can("update", "Post" as const);
    can("delete", "Post" as const);
  } else {
    can("read", "Post" as const);
  }

  return build();
}
