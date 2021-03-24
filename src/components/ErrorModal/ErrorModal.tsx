import React from "react";

export const ErrorModal = () => {
  return (
    <div
      className="alert alert-danger text-center"
      role="alert"
      style={{ width: "50%" }}
    >
      Ошибка запроса
    </div>
  );
};
