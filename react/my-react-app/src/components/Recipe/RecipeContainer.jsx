import React from "react";
import Recipe from "./Recipe";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipeContainer() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function recipeCall() {
      const res = await axios.get("https://dummyjson.com/recipes");
      const data = res["data"]["recipes"];
      setRecipe(data);
    }
    recipeCall();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Recipe 컴포넌트 반복 */}
        {recipe.map((element) => {
          return <Recipe key={element.id} Props={element}></Recipe>;
        })}
      </div>
    </div>
  );
}
