import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={{ fontFamily: 'sans-serif' }}>Texto normal</Text>
        <Text style={{ fontFamily: 'monospace' }}>Texto monoespaciado</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Prueba</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#616161",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff"
  },
  subtitle: {
    fontSize: 36,
    color: "#fff",
  },
  button: {
    backgroundColor: "yellow"
  }
});
