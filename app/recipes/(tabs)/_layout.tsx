import { Tabs } from "expo-router";

export default function MealsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="random" options={{ title: "Recette Aléatoire" }} />
      <Tabs.Screen name="index" options={{ title: "Toutes les recettes" }} />
    </Tabs>
  );
}
