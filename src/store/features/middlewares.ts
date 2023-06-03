import { removeCookie } from "typescript-cookie";
import { logout } from "./userSlice";


export const logoutMiddleware = () => (next: any) => (action: any) => {
  if (action.type === logout.type) {
    removeCookie("token");
  }

  return next(action);
};
