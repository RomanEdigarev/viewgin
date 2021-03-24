import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: "150px", height: "150px" }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
