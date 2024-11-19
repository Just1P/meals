import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function SearchResultsScreen() {
  const { query } = useLocalSearchParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const mealsJson = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const meals = await mealsJson.json();
        setMeals(meals.meals || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
      }
    })();
  }, [query]);

  const handleShowSingleMeals = (mealID: number) => {
    router.push("recipes/" + mealID);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultats pour : {query}</Text>
      {meals.length === 0 ? (
        <Text style={styles.noResultsText}>Aucune recette trouvée.</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.mealCard}
              onPress={() => handleShowSingleMeals(item.idMeal)}
            >
              <Image
                source={{ uri: item.strMealThumb }}
                style={styles.mealImage}
              />
              <Text style={styles.mealTitle}>{item.strMeal}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50",
  },
  loadingText: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginVertical: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: "#e74c3c",
    textAlign: "center",
    marginVertical: 20,
  },
  mealCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  mealImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  mealTitle: {
    fontSize: 16,
    color: "#34495e",
  },
});
