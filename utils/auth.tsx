import { Magic } from "magic-sdk";

const magic = new Magic(process.env.NEXT_MAGIC_KEY ?? "");

export const useCheckUser = () => {
  const isLoggedIn = magic.user.isLoggedIn();
  return isLoggedIn;
};

export const useGetUser = async (cb: any) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    return cb({ isLoggedIn: true, email: user.email });
  }
  return cb({ isLoggedIn: false });
};

export const loginUser = async (email: string) => {
  await magic.auth.loginWithMagicLink({ email });
};

export const logoutUser = async () => {
  await magic.user.logout();
};
