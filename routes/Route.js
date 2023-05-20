import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../views/HomeScreen";
import AlumnoScreen from "../views/AlumnoScreen";
import DocenteScreen from "../views/DocenteScreen";
import MateriaScreen from "../views/MateriaScreen";

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alumno" component={AlumnoScreen} />
        <Stack.Screen name="Docente" component={DocenteScreen} />
        <Stack.Screen name="Materia" component={MateriaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
