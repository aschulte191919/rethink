import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { stitchesGlobal } from "../stitches.config";
import { UserContext } from "../lib/UserContext";
import Router from "next/router";
import { magic } from "../lib/magic";
import { ThemeProvider } from "@magiclabs/ui";
import "@magiclabs/ui/dist/cjs/index.css";

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
  type UserContext = {
    user?: object;
    setUser: (c: string) => void;
  };
  const [user, setUser] = useState<UserContext>();
  const [loading, setLoading] = useState(false);

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, redirect to /login and set UserContext to { user: null }
  useEffect(() => {
    setLoading(true);
    magic.user.isLoggedIn().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData: any) => setUser(userData));
      } else {
        Router.push("/login");
        setUser(undefined);
      }
    });
  }, []);

  return (
    <ThemeProvider>
      <UserContext.Provider value={{ user, setUser, loading }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
