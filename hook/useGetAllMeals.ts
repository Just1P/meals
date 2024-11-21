import { useEffect, useState } from "react";

export const useGetAllMeals = () => {
  const [meals, setMeals] = useState("");
  // Le state "meals" est défini avec un tableau vide par le useState car aucune donnée n'est renseigné lors du premier rendu du composant. Il sera rempli grace au setMeals qui va refaire un rendu du composant avec les données mis a jour.

  // fonction anonyme qui s'autoinvoque: execution à la lecture. utilisation d'une fontion anonyme pour pouvoir utiliser une fonction asynchrone dans le useEffect à cause du fetch qui est obligatoirement async
  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealsJson.json();
      // C'est ici que le state est mis à jour avec les données
      setMeals(meals.meals || []);
    })();
  }, []);
  return meals;
};
