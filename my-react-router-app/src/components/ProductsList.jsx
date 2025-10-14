import React from "react";

export default function ProductsList({ props }) {
  return (
    <div>
      <div>id:{props.id}</div>
      <div>title:{props.title}</div>
    </div>
  );
}
