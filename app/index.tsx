import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const meals = [
  {
    id: 1,
    title: "Spaghetti bolognaise",
    description: "Des pâtes avec de la sauce tomate et de la viande hachée",
    image:
      "https://assets.afcdn.com/recipe/20160419/14652_w1024h1024c1cx2420cy1872.jpg",
    category: "pasta",
  },
  {
    id: 2,
    title: "Salade César",
    description:
      "Une salade avec de la salade verte, du poulet, des croûtons et de la sauce César",
    image: "https://images.ricardocuisine.com/services/recipes/8440.jpg",
    category: "salad",
  },
  {
    id: 3,
    title: "Tarte aux pommes",
    description: "Une tarte sucrée avec des pommes",
    image: "https://assets.afcdn.com/recipe/20220128/128250_w600.jpg",
    category: "dessert",
  },
  {
    id: 4,
    title: "Risotto aux champignons",
    description: "Un risotto crémeux avec des champignons",
    image: "https://assets.afcdn.com/recipe/20221020/136481_w600.jpg",
    category: "pasta",
  },
  {
    id: 5,
    title: "Salade niçoise",
    description:
      "Une salade avec des tomates, des oeufs, des olives, du thon et des haricots verts",
    image: "https://assets.afcdn.com/recipe/20190704/94687_w600.jpg",
    category: "salad",
  },
  {
    id: 6,
    title: "Tiramisu",
    description:
      "Un dessert italien avec du café, des biscuits et du mascarpone",
    image: "https://assets.afcdn.com/recipe/20190529/93097_w600.jpg",
    category: "dessert",
  },
];

const HomeScreen = () => {
  {
    /* Selectionne les 3 derniers éléments de mon tableau meals */
  }
  const latestMeals = meals.slice(-3);

  {
    /* va push le screen recipes, permet de le réutiliser sur mon bouton de ma page d'acceuil pour que ce dernier screen se stack au "premier plan" au press du bouton */
  }
  const handleShowAllMeals = () => {
    router.push("recipes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Meals</Text>
        <Text style={styles.subtitle}>Explorez de délicieuses recettes</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Découvrez une variété de recettes simples et savoureuses pour tous les
          goûts. Laissez-vous inspirer par nos suggestions !
        </Text>
      </View>
      <View style={styles.latestMeals}>
        <Text style={styles.sectionTitle}>Dernières recettes</Text>

        {/* Flatlist pour afficher mon contenu en pouvant le swipe directement, il prend comme params data qui est donc mes 3 dernieres recettes avec "lastMeals", la key qui est l'id de mes recettes qu'on a renseigné, render item qui va etre la rendu ma liste ici sous forme de carde par exemple, avec une image et un titre, horizontal pour dire que la liste sera affichée horizontalement et enfin on cache la barre de scroll */}
        <FlatList
          data={latestMeals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.mealCard}>
              <Image source={{ uri: item.image }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{item.title}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity onPress={handleShowAllMeals} style={styles.button}>
          <Text style={styles.buttonText}>Voir toutes les recettes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Meals. Tous droits réservés.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 18,
    color: "#7f8c8d",
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
  footer: {
    alignItems: "center",
    marginTop: "auto",
  },
  footerText: {
    fontSize: 12,
    color: "#95a5a6",
  },
});

export default HomeScreen;
