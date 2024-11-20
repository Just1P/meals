import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CreateMealScreen = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleChangeName = (text) => {
    setName(text);
  };

  const handleChangeIngredients = (text) => {
    setIngredients(text);
  };

  const handleCreate = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/create.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          ingredients,
        }),
      }
    );

    console.log(response);
  };

  return (
    <View style={styles.container}>
      <Text>Créer une recette</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom de la recette"
        onChangeText={handleChangeName}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrédients"
        onChangeText={handleChangeIngredients}
      />

      <TouchableOpacity onPress={handleCreate}>
        <Text>Créer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 10,
    marginBottom: 10,
  },
});
