import { User } from "firebase/auth";

export interface IProvider {
  signin: (email: string, password: string) => Promise<User | undefined>;
  signout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<User | undefined>;
}
