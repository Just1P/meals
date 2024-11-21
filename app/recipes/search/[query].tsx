import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useGetMealsByQuery } from "@/hook/useGetMealsByQuery";

export default function SearchResultsScreen() {
  const { query } = useLocalSearchParams();
  const { meals, loading } = useGetMealsByQuery(query); // Récupération des données et de l'état

  const handleShowSingleMeals = (mealID: number) => {
    router.push("recipes/details/" + mealID);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultats pour : {query}</Text>
      {loading ? (
        <Text style={styles.loadingText}>Chargement...</Text>
      ) : meals.length === 0 ? (
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
