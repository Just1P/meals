import { Stack } from "expo-router";

// Le Layout est ce qui va permettre de configurer mes stacks pour avoir cette navigation, mais pas que

export default function RecipesLayout() {
  return (
    //Les stacks sont comme un mille feuille, un premier screen acceuil va etre la premier feuille, lors de l'ajout d'un screen, c'est comme si une feuille se mettait par dessus, la premiere est toujours là, on ne verra que la derniere ajoutée mais si on retire cette derniere feuille celle d'en dessous nous réaparait.  C'est le LIFO
    <Stack>
      <Stack.Screen name="recipes/[id]" options={{ title: "Recettes" }} />
      <Stack.Screen
        name="recipes/search/[query]"
        options={{ title: "Recherche" }}
      />
    </Stack>
  );
}
