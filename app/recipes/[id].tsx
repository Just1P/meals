import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";
import { useLocalSearchParams } from "expo-router";

export default function RecipeDetailScreen() {
  // useLocalSearchParams est un hook qui va récupérer l'id de notre route recipes/[id]
  const { id } = useLocalSearchParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        setMeal(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Erreur lors de la récupération de la recette :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.loadingText}>Chargement...</Text>
        <Footer />
      </View>
    );
  }

  if (!meal) {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.errorText}>Recette introuvable.</Text>
        <Footer />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
        <Text style={styles.mealTitle}>{meal.strMeal}</Text>
        <Text style={styles.mealCategory}>
          Catégorie : {meal.strCategory || "Non spécifiée"}
        </Text>
        <Text style={styles.mealArea}>
          Origine : {meal.strArea || "Non spécifiée"}
        </Text>
        <Text style={styles.mealDescription}>{meal.strInstructions}</Text>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  mealImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 10,
  },
  mealCategory: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#7f8c8d",
    marginBottom: 5,
  },
  mealArea: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#7f8c8d",
    marginBottom: 20,
  },
  mealDescription: {
    fontSize: 16,
    color: "#7f8c8d",
    lineHeight: 24,
    textAlign: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginVertical: 20,
  },
  errorText: {
    fontSize: 18,
    color: "#e74c3c",
    textAlign: "center",
    marginTop: 20,
  },
});
