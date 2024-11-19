import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Meals</Text>
      <Text style={styles.subtitle}>Explorez de délicieuses recettes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
