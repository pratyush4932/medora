import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Components/home";
import Patient from "../Components/Patient"; 
import Doctor from "../Components/Doctor";  // Import your screens
import register from "../Components/register";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // This will hide the header for all screens
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Patient" component={Patient} />
        <Stack.Screen name="Doctor" component={Doctor} />
        <Stack.Screen name="register" component={register} />
      </Stack.Navigator>
  );
}
