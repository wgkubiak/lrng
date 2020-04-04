import React from "react";

const ValidationComponent = (props) =>
  props.textLength ? <p>Text too short</p> : <p>Text long enough</p>;

export default ValidationComponent;
