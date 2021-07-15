import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { loggingOut } from "../API/firebaseMethods";

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      try {
        let doc = await firebase
          .firestore()
          .collection("users")
          .doc(currentUserUID)
          .get();

        if (!doc.exists) {
          Alert.alert("No user data found!");
        } else {
          let dataObj = doc.data();
          setFirstName(dataObj.firstName);
        }
      } catch (err) {
        Alert.alert("There is an error.", err.message);
      }
    }
    getUserInfo();
  });
 
  const handlePress = () => {
    loggingOut();
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
      <Text style={styles.questionText}>
        {" "}
        No laboramus maiestatis pri, ex vis rebum doctus?
      </Text>

      {/*  Inquiry Decisions And Navigation */}
      <View style={styles.answerButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Inquiry One")}
        >
          <Text style={styles.buttonText}>Answer 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Inquiry Two")}
        >
          <Text style={styles.buttonText}>Answer 2</Text>
        </TouchableOpacity>
      </View>

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

  answerButtonContainer: {
    flexDirection: "row",
    position: "relative",
    bottom: "10%",
  },

  navContainer: {
    top: "30%",
    position: "relative",
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    marginTop: "2%",
    marginBottom: "10%",
    fontWeight: "bold",
    color: "black",
  },

  titleText: {
    bottom: "25%",
    position: "relative",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#2E6194",
  },

  questionText: {
    color: "black",
    bottom: "10%",
    position: "relative",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "5%",
  },
});
