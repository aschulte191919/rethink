import React from "react";
import { styled } from "../../stitches.config";

const SwitchInput = styled("input", {
  height: "0",
  width: "0",
  visibility: "hidden",
});

const SwitchLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  width: "30px",
  height: "15px",
  borderRadius: "100px",
  border: "2px solid gray",
  position: "relative",
  transition: "background-color 0.2s",
  marginRight: "5px",
});

const SwitchButton = styled("span", {
  content: "",
  position: "absolute",
  top: "2px",
  left: "2px",
  width: "12px",
  height: "12px",
  borderRadius: " 45px",
  transition: "0.2s",
  background: "grey",
  boxShadow: "0 0 2px 0 rgba(10, 10, 10, 0.29)",

  [`${SwitchInput}:checked + ${SwitchLabel} &`]: {
    left: " calc(100% - 2px)",
    transform: "translateX(-100%)",
  },

  [`${SwitchInput}:active &`]: {
    width: "45px",
  },
});

const Switch = ({ id, toggled, onChange, label }) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled ? toggled : undefined}
        onChange={onChange}
      />
      <SwitchLabel htmlFor={id}>
        <SwitchButton />
      </SwitchLabel>
      {label}
    </>
  );
};

export default Switch;
