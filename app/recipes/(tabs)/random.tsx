import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { router } from "expo-router";
import { useGetRandomMeals } from "@/hook/useGetRandomMeals";

const RandomScreen = () => {
  const { meal, loading } = useGetRandomMeals();

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
