import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "../stitches.config";
import { DEFAULT_THEME, getThemeVariables } from "@magiclabs/ui";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html: getThemeVariables(DEFAULT_THEME).toCSS(),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
