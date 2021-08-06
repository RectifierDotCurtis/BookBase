import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import LoadingScreen from "./screens/LoadingScreen";
import Dashboard from "./screens/Dashboard";
import GuestBook from "./screens/GuestBook";

// Import Screens For Inquiry 1 And Inquiry 2
import InquiryOne from "./screens/InquiryOne";
import InquiryTwo from "./screens/InquiryTwo";
import SlideShow from "./screens/SlideShow";

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Loading"}
          component={SlideShow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Dashboard"}
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"GuestBook"}
          component={GuestBook}
          options={{ headerShown: false }}
        />
        {/* Defining Screens For Inquiry One And Two */}
        <Stack.Screen
          name={"Inquiry One"}
          component={InquiryOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Inquiry Two"}
          component={InquiryTwo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
