import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

function UserProfileDrawerItem() {
  return (
    <View>
      <Text>Profil</Text>
    </View>
  );
}

function UserSettingsDrawerItem() {
  return (
    <View>
      <Text>Paramètres</Text>
    </View>
  );
}

export default function UserDrawLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="profile"
        component={UserProfileDrawerItem}
        options={{ title: "Profil" }}
      />
      <Drawer.Screen
        name="settings"
        component={UserSettingsDrawerItem}
        options={{ title: "Paramètres" }}
      />
    </Drawer.Navigator>
  );
}
