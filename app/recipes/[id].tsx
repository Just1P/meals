import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";
import { meals } from "../data/meals";
import { useLocalSearchParams } from "expo-router";

export default function RecipeDetailScreen() {
  //   useLocalSearchparams est un hook qui va récupérer l'id de notre route /[id] pour afficher les bon elements de notre tableau d'objet en fonction de ce dernier
  const { id } = useLocalSearchParams();
  const meal = meals.find((meal) => meal.id === Number(id));

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: meal?.image }} style={styles.mealImage} />
        <Text style={styles.mealTitle}>{meal?.title}</Text>
        <Text style={styles.mealDescription}>{meal?.description}</Text>
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
  mealDescription: {
    fontSize: 16,
    color: "#7f8c8d",
    lineHeight: 24,
    textAlign: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#e74c3c",
    textAlign: "center",
    marginTop: 20,
  },
});
