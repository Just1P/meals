import React from "react";
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
import { meals } from "./data/meals";
import { router } from "expo-router";

const HomeScreen = () => {
  const latestMeals = meals.slice(-3);

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
        {/* Flatlist pour afficher mon contenu en pouvant le swipe directement, il prend comme params data qui est donc mes 3 dernieres recettes avec "lastMeals", la key qui est l'id de mes recettes qui est renseigné dans mon tableau d'objets, render item qui va etre la rendu ma liste ici sous forme de cards cliquables par exemple, avec une image et un titre, horizontal pour dire que la liste sera affichée horizontalement et enfin on cache la barre de scroll   */}
        <FlatList
          data={latestMeals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleShowSingleMeals(item.id)}
              style={styles.mealCard}
            >
              <Image source={{ uri: item.image }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
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
