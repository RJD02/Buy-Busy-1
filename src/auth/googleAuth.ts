import {
  AuthError,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { config } from "../config/config";
import { IProvider } from "./providerInterface";

config.googleAuthProvider = new GoogleAuthProvider();

const signin = async () => {
  try {
    if (config.auth === null || config.googleAuthProvider === null) {
      return undefined;
    }
    const result = await signInWithPopup(
      config.auth,
      config.googleAuthProvider,
    );
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    if (!token) return;
    const user = result.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  }
};

const signout = async () => {
  try {
    if (config.auth === null) return;
    await signOut(config.auth);
    console.log("Signed out successfully");
  } catch (error) {}
};

export const googleAuth: IProvider = {
  signin,
  signup: signin,
  signout,
};
