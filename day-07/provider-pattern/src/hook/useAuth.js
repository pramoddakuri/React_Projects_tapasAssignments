import { use } from "react";
import { AuthincationContext } from "../context";

const useAuth = () => {
  const {loggedIn, login, logout, userData} = use(AuthincationContext);
  return {loggedIn, login, logout, userData};
}

export {useAuth}