import { useEffect, useState } from "react";

export const useGetMealsByQuery = (query) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true); // Définir l'état de chargement
      try {
        const mealsJson = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const meals = await mealsJson.json();
        setMeals(meals.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMeals();
    }
  }, [query]);

  return { meals, loading };
};
