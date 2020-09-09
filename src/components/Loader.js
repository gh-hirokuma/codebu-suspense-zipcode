import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ size }) => {
  return <ClipLoader size={size} color={`#ffffff`} />;
};

export default Loader;
