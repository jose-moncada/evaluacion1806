import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

import carrosData from "../cars.json";

export default function Page() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Concesionario</Text>
      {carrosData.carros.map((carro) => (
        <View key={carro.id} style={styles.card}>
          <Text style={styles.subtitle}>{carro.marca} {carro.modelo}</Text>
          <Text style={styles.description}>Año: {carro.anio}</Text>
          <Text style={styles.valor}>$ {carro.precio.toLocaleString("es-CO")}</Text>
          <TouchableOpacity style={styles.button}>
            <Text>Ver más</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#616161",
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  description: {
    color: "#fff"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "sans-serif-build",
  },
  card: {
    backgroundColor: "#383838",
    padding: 20,
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 10,
  },
  valor: {
    color: "#fff"
  },
  subtitle: {
    fontSize: 36,
    color: "#fff",
  },
  button: {
    backgroundColor: "#eaff00",
    alignItems: "center",
    color: "#fff",
    marginTop: 20,
    width: 100,
  }
});
