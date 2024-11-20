import { useEffect, useState } from "react";

// je créé une fonction
// qui créé le state meals
// qui fait une requête fetch sur l'API de meals
// qui modifie le state meals avec les données de l'API
// et qui retourne la liste des meals

export const useGetMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealsJson.json();

      setMeals(meals.meals.slice(0, 3));
    })();
  }, []);

  return meals;
};
