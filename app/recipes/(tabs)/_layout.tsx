import { Tabs } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function MealsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="random"
        options={{
          title: "Recette Aléatoire",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Toutes les recettes",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "kitchen" : "soup-kitchen"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create-meal"
        options={{
          title: "Créer une recette",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="create" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
