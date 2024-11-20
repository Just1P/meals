import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const meals = await mealsJson.json();
      setLatestMeals(meals.meals.slice(0, 3));
    })();
  }, []);

  const handleShowAllMeals = () => {
    router.push("recipes");
  };

  const handleShowSingleMeals = (mealID: number) => {
    router.push("recipes/" + mealID);
  };

  const handleSearch = () => {
    router.push("recipes/search/" + searchQuery);
  };

  const handleChangeSearch = (text) => {
    setSearchQuery(text);
  };

  const handleRandom = () => {
    router.push("recipes/random");
  };

  const handleProfile = () => {
    router.push("user/user");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher une recette"
          value={searchQuery}
          onChangeText={(text) => handleChangeSearch(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Rechercher</Text>
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity onPress={handleRandom} style={styles.randomButton}>
        <Text style={styles.randomButtonText}>Recette Aléatoire</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfile} style={styles.randomButton}>
        <Text style={styles.randomButtonText}>Recette Aléatoire</Text>
      </TouchableOpacity>

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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#e67e22",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
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
  randomButton: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  randomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeScreen;
