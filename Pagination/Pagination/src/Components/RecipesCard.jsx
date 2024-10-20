import React from "react";
import propTypes from "prop-types";

const RecipesCard = ({ name, image, rating, ingredients }) => {
  return (
    <div className="w-[250px] h-[400px]">
      <div className="overflow-hidden rounded-top-left-xl">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div
        className="font-bold
      "
      >
        {name} ({rating})
      </div>
      <div>
        {ingredients.map((item, index) => {
          return (
            <p className="text-xs text-gray-400" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

RecipesCard.propType = {
  name: propTypes.string.isRequried,
  image: propTypes.string.isRequried,
  ingredients: propTypes.string.isRequried,
  rating: propTypes.string.isRequried,
};

export default RecipesCard;
