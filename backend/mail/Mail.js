import React from "react";

// Das E-Mail Html-Template
export function Mail() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello World!"),
    React.createElement("p", null, "Dies ist eine Test Email.")
  );
}
