import { styled } from "../../stitches.config";
import { Widget } from "@typeform/embed-react";

const Wrapper = styled("div", {
  display: "flex",
});

const EmployeeDashboard = () => {

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

export default EmployeeDashboard;
