import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pantalla principal</Text>
      <Button title="Alumnos" onPress={() => navigation.navigate("Alumno")} />
      <Button title="Docentes" onPress={() => navigation.navigate("Docente")} />
      <Button title="Materias" onPress={() => navigation.navigate("Materia")} />
    </View>
  );
}
