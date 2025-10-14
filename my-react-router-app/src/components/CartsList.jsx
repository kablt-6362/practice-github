import React from "react";

export default function CartsList({ props }) {
  return (
    <div>
      <div>id:{props.id}</div>
      <div>products:</div>
      <div>total:{props.total}</div>
      <div>discountedTotal:{props.discountedTotal}</div>
    </div>
  );
}
