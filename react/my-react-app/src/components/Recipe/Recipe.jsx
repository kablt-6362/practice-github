import React from "react";

export default function Recipe({ Props }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={ Props.image}
        alt="레시피 이미지"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{Props.name}</h3>
      <p className="text-gray-600 mb-2">요리 시간:{Props.cookTimeMinutes+Props.prepTimeMinutes}</p>
      <p className="text-gray-600 mb-2">난이도: {Props.difficulty }</p>
      <p className="text-gray-600">칼로리: {Props.caloriesPerServing }</p>
    </div>
  );
}
// {Props.cookTimeMinutes}+${Props.prepTimeMinutes}
