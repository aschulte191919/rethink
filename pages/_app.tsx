import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { stitchesGlobal } from "../stitches.config";
import { useCheckUser } from "../utils/auth";
const Login = React.lazy(() => import("./login"));

/* --------------------------------------------------------
 * Global Styles
 * ------------------------------------------------------*/

const globalStyles = stitchesGlobal({
  body: {
    padding: "0",
    margin: "0",
    fontFamily: "Poppins",
    backgroundColor: "#f8f6f0",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  const isLoggedIn = await magic.user.isLoggedIn();
  return isLoggedIn ? <Component {...pageProps} /> : <Login />;
}
export default MyApp;
