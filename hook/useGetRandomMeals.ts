import { useEffect, useState } from "react";

export const useGetRandomMeals = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const mealsJson = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const meals = await mealsJson.json();
        setMeal(meals.meals[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération de la recette :", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { meal, loading };
};
