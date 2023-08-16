import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome1.png")}
        style={styles.image}
      />

      <Text style={styles.premiumText}>40K+ Premium Recipes</Text>

      <Text style={styles.cookText}>Cook Like A Chef</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: Platform.OS === "ios" ? 30 : -10, // Adjust marginTop based on platform
  },
  premiumText: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  cookText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#3c444c",
    marginTop: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});

export default WelcomeScreen;
