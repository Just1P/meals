import { useEffect, useState } from "react";

export const useGetMealsById = (id) => {
  const [meal, setMeal] = useState([null]);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const meals = await mealsJson.json();
      setMeal(meals.meals[0]);
    })();
  }, [id]);

  return meal;
};
