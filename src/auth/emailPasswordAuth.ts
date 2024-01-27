import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { config } from "../config/config";
import { IProvider } from "./providerInterface";

const signup = async (email: string = "", password: string = "") => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      config.auth,
      email,
      password,
    );
    console.log("Signed up");
    const user = userCredential.user;
    return user;
  } catch (e: unknown) {
    console.error(e);
  }
};

const sigin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      config.auth,
      email,
      password,
    );
    console.log("Signed in");
    const user = userCredential.user;
    return user;
  } catch (e: unknown) {
    console.error(e);
  }
};

const signout = async () => {
  try {
    if (config.auth === null) return;
    await signOut(config.auth);
    console.log("Signout successfull");
  } catch (e) {
    console.error(e);
  }
};

export const emailPasswordAuth: IProvider = {
  signout,
  signin,
  signup,
};
