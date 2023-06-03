export interface User {
  email: string;
  password: string;
}

export interface UserData {
  id: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

export type PartialUserData = Partial<Pick<UserData, 'firstName' | 'lastName'>>;

export interface UserState {
  isLogged: boolean;
  loginStatus: "idle" | "fetching" | "resolved" | "rejected";
  profileStatus: "idle" | "fetching" | "resolved" | "rejected";
  token: string | null;
  userData: UserData;
  loginError: string | undefined | null;
  profileError: string | undefined | null;
}
