import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Meals. Tous droits réservés.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    marginTop: "auto",
  },
  footerText: {
    fontSize: 12,
    color: "#95a5a6",
  },
});

export default Footer;
