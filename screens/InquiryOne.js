import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loggingOut } from "../API/firebaseMethods";

export default function InquiryOne({ navigation }) {
  const handlePress = () => {
    loggingOut();
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Inquiry Decision One</Text>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GuestBook")}
        >
          <Text style={styles.buttonText}>GuestBook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#3FC5AB",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 150,
    padding: 8,
    backgroundColor: "#ff9999",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 5,
    marginHorizontal: 8,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  titleText: {
    bottom: "25%",
    position: "relative",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#2E6194",
  },

  navContainer: {
    top: "30%",
    position: "relative",
  },
});
