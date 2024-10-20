import React from "react";
import useRecipes from "./Hooks/useRecipes";
import RecipesCard from "./Components/RecipesCard";
import Pagination from "./Components/Pagination";

const App = () => {
  const { total, recipes, loading, skip, setSkip } = useRecipes();
  return (
    <div className="my-10 px-10 ">
      <div className="flex gap-10 justify-center">
        {recipes?.length > 0 ? (
          recipes.map((recipe) => <RecipesCard key={recipe.id} {...recipe} />)
        ) : (
          <div>No recipes found</div>
        )}
      </div>
      <Pagination skip={skip} setSkip={setSkip} total={total} />
    </div>
  );
};

export default App;
