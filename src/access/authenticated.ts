import type { AccessArgs } from "payload/config";
import type { User } from "../payload-types";

type isAuthenticated = (args: AccessArgs<User>) => boolean;

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user);
};
