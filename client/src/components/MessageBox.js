import React from "react";

export default function MessageBox(props) {
  console.log("props: ", props);
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
