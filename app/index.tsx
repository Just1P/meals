import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "./components/header";
import Footer from "./components/footer";
import { router } from "expo-router";

const HomeScreen = () => {
  const [latestMeals, setLatestMeals] = useState([]);
  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealsJson.json();
      // C'est ici que le state est mis à jour avec les données
      setLatestMeals(meals.meals.slice(0, 3));
    })();
  }, []);

  // va push le screen recipes, permet de le réutiliser sur mon bouton de ma page d'acceuil pour que ce dernier screen se stack au "premier plan" au press du bouton
  const handleShowAllMeals = () => {
    router.push("recipes");
  };

  const handleShowSingleMeals = (mealID: number) => {
    router.push("recipes/" + mealID);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Découvrez une variété de recettes simples et savoureuses pour tous les
          goûts. Laissez-vous inspirer par nos suggestions !
        </Text>
      </View>

      <View style={styles.latestMeals}>
        <Text style={styles.sectionTitle}>Dernières recettes</Text>
        {latestMeals.length === 0 ? (
          <Text style={styles.loadingText}>Chargement...</Text>
        ) : (
          /* Flatlist pour afficher mon contenu en pouvant le swipe directement, il prend comme params data qui est donc mes 3 dernieres recettes avec "latestMeals", la key qui est l'id de mes recettes récupéré depuis l'API, render item qui va etre le rendu de ma liste ici sous forme de cards cliquables par exemple, avec une image et un titre, horizontal pour dire que la liste sera affichée horizontalement et enfin on cache la barre de scroll */
          <FlatList
            data={latestMeals}
            keyExtractor={(item) => item.idMeal}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleShowSingleMeals(item.idMeal)}
                style={styles.mealCard}
              >
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={styles.mealImage}
                />
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
        <TouchableOpacity onPress={handleShowAllMeals} style={styles.button}>
          <Text style={styles.buttonText}>Voir toutes les recettes</Text>
        </TouchableOpacity>
      </View>

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
  description: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#34495e",
    textAlign: "center",
    lineHeight: 24,
  },
  latestMeals: {
    marginBottom: 20,
  },
  sectionTitle: {
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
  mealCard: {
    marginRight: 15,
    alignItems: "center",
  },
  mealImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginBottom: 5,
  },
  mealTitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#34495e",
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#e67e22",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeScreen;
