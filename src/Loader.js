// Loader.js
import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({loading}) => {
  // console.log("loading loader" , loading)
  return (
    loading && (
      <div style={loaderStyles}>
        <ClipLoader color="#3498db" size={50} />
      </div>
    )
  );
};

const loaderStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(206, 200, 200, 0.5)",
  zIndex: 1000,
};

export default Loader;
