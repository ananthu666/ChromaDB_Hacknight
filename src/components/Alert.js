import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div>
      <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <strong> {props.alert.type}</strong>
        :  
        <strong> {props.alert.msg}</strong>
      </div>
    </div>
  );
}
