import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const MealActions = () => {
  return (
    <View style={styles.actionContainer}>
      <Text style={styles.actionText}>Supprimer</Text>
    </View>
  );
};

const MealListItem = ({ recipe }) => {
  const handleNavigateToDetails = (id) => {
    router.push("/recipes/details/" + id);
  };

  return (
    <Swipeable renderRightActions={MealActions}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{recipe.strMeal}</Text>
        <Text
          style={styles.detailsText}
          onPress={() => handleNavigateToDetails(recipe.idMeal)}
        >
          Voir la recette
        </Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#34495e",
  },
  detailsText: {
    fontSize: 14,
    color: "#3498db",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e74c3c",
    width: 100,
    height: "100%",
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MealListItem;
