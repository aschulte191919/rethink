import { styled } from "../../stitches.config";

export const ContentWrapper = styled("div", {
  paddingRight: "0px",
  paddingLeft: "0px",
  width: "100%",

  "@md": {
    paddingRight: "75px",
    paddingLeft: "75px",
  },
  "@lg": {
    paddingRight: "150px",
    paddingLeft: "150px",
  },
  "@xl": {
    paddingRight: "200px",
    paddingLeft: "200px",
  },
});

export const PageWrapper = styled("div", {
  display: "flex",
  width: "100%",
});

export const Wrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
  },
});
