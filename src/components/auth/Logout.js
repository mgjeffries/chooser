import React from "react";

export const Logout = (props) => {
  localStorage.removeItem("chooser_user");
  props.history.push("/login");

  return <></>;
};
