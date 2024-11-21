import { useEffect, useState } from "react";

export const useGetMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const mealsJson = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const meals = await mealsJson.json();
        setMeals(meals?.meals?.slice(0, 3) || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des repas :", error);
      }
    })();
  }, []);

  return meals;
};
