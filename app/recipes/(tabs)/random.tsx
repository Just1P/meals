import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { router } from "expo-router";

const RandomScreen = () => {
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

  const handleShowRecipeDetails = (mealID: number) => {
    router.push("recipes/details/" + mealID);
  };

  return (
    <View style={styles.container}>
      <Header />

      {loading ? (
        <Text style={styles.loadingText}>Chargement...</Text>
      ) : meal ? (
        <View style={styles.mealCard}>
          <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
          <Text style={styles.mealTitle}>{meal.strMeal}</Text>
          <Text style={styles.mealDescription}>
            {meal.strInstructions.slice(0, 50)}...
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleShowRecipeDetails}
          >
            <Text style={styles.buttonText}>Voir les détails</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.errorText}>Aucune recette trouvée.</Text>
      )}

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  loadingText: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginVertical: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#e74c3c",
    textAlign: "center",
    marginVertical: 20,
  },
  mealCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  mealImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  mealTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 10,
    textAlign: "center",
  },
  mealDescription: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e67e22",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RandomScreen;
