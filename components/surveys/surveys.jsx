import { styled } from "../../stitches.config";
import { Widget } from "@typeform/embed-react";
import * as ml5 from "ml5";

const Wrapper = styled("div", {
  display: "flex",
});

const Surveys = () => {

  return (
    <>
      <Wrapper>
        <Widget
          id="TnOJqgQA"
          style={{ height: "400px", width: "50%", padding: "10px" }}
        />
        <Widget
          id="TnOJqgQA"
          style={{ height: "400px", width: "50%", padding: "10px" }}
        />
        <Widget
          id="TnOJqgQA"
          style={{ height: "400px", width: "50%", padding: "10px" }}
        />
      </Wrapper>
      <Wrapper>
        <Widget
          id="TnOJqgQA"
          style={{ height: "400px", width: "50%", padding: "10px" }}
        />
        <Widget
          id="TnOJqgQA"
          style={{ height: "400px", width: "50%", padding: "10px" }}
        />
        <Widget
          id="TnOJqgQA"
          style={{ height: "400px", width: "50%", padding: "10px" }}
        />
      </Wrapper>
    </>
  );
};

export default Surveys;
