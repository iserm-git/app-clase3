import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../views/HomeScreen";
import AlumnoScreen from "../views/AlumnoScreen";
import DocenteScreen from "../views/DocenteScreen";
import MateriaScreen from "../views/MateriaScreen";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "Alumno") {
              iconName = focused ? "people-outline" : "people";
            } else if (route.name === "Docente") {
              iconName = focused ? "body-outline" : "body";
            } else if (route.name === "Materia") {
              iconName = focused ? "book-outline" : "book";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Alumno" component={AlumnoScreen} />
        <Tab.Screen name="Docente" component={DocenteScreen} />
        <Tab.Screen name="Materia" component={MateriaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
