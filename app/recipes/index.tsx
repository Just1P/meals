import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";
import { meals } from "../data/meals";
import { router } from "expo-router";

const RecipesScreen = () => {
  const handleShowSingleMeals = (mealID: number) => {
    router.push("recipes/" + mealID);
  };
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.recipeList}>
        <Text style={styles.sectionTitle}>Toutes les recettes</Text>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleShowSingleMeals(item.id)}
              style={styles.mealCard}
            >
              <Image source={{ uri: item.image }} style={styles.mealImage} />
              <Text style={styles.mealTitle}>{item.title}</Text>
              <Text style={styles.mealDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
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
  recipeList: {
    flex: 1,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50",
  },
  mealCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  mealImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  mealDescription: {
    fontSize: 14,
    color: "#7f8c8d",
  },
});

export default RecipesScreen;
