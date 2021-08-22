import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import * as firebase from "firebase";

import { loggingOut } from "../API/firebaseMethods";
import FlatButton from '../components/Button'

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
        <FlatButton text={'Answer 1'} onPress={() => navigation.navigate("Inquiry One")} />

        <FlatButton text={'Answer 2'} onPress={() => navigation.navigate("Inquiry Two")} />
      </View>

      <View style={styles.navContainer}>
        <FlatButton text={'Guest Book'} onPress={() => navigation.navigate("GuestBook")} />
        <FlatButton text={'Center Hub'} onPress={() => navigation.navigate("CenterHub")} />
        <FlatButton text={'Log Out'} onPress={handlePress} />
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
