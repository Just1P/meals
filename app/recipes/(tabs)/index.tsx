import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { router } from "expo-router";
import { useGetAllMeals } from "@/hook/useGetAllMeals";

const RecipesScreen = () => {
  const meals = useGetAllMeals();

  const handleShowSingleMeals = (mealID: number) => {
    router.push("recipes/details/" + mealID);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.recipeList}>
        <Text style={styles.sectionTitle}>Toutes les recettes</Text>

        {meals.length === 0 ? (
          <Text style={styles.loadingText}>Chargement...</Text>
        ) : (
          <FlatList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            renderItem={({ item }) => (
              <View
                onPress={() => handleShowSingleMeals(item.idMeal)}
                style={styles.mealCard}
              >
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={styles.mealImage}
                />
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
                <Text style={styles.mealDescription}>
                  {item.strInstructions.slice(0, 100)}...
                </Text>
              </View>
            )}
          />
        )}
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
  loadingText: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginVertical: 20,
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
