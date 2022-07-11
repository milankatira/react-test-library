import React from "react";
import { TYPE } from "./constant/constant";
export default function Hello() {
  if ((TYPE === "inline")) {
    return <h1>inline</h1>;
  } else {
    return <h1>Hello</h1>;
  }
}
