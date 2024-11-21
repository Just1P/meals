export const createMeal = async (name, ingredients) => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/create.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        ingredients,
      }),
    }
  );
};
