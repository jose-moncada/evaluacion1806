import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import carrosData from "../cars.json";
import { calcularRiesgo } from "../app/utils/calcularRiesgo";

export default function Detalle() {
    const { id } = useLocalSearchParams();

    const carro = carrosData.carros.find(
        c => c.id === Number(id)
    );

    if (!carro) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Vehículo no encontrado</Text>
            </View>
        );
    }

    const resultado = calcularRiesgo(
        carro.precio,
        carro.kilometraje,
        carro.llantasCambio
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{carro.marca} {carro.modelo}</Text>
                <Text style={styles.info}>Año: {carro.anio}</Text>
                <Text style={styles.info}>Color: {carro.color}</Text>
                <Text style={styles.info}>Combustible: {carro.combustible}</Text>
                <Text style={styles.info}>Transmisión: {carro.transmision}</Text>
                <Text style={styles.price}>Precio Original:{"\n"}$ {carro.precio.toLocaleString("es-CO")}</Text>
                <Text style={styles.info}>Kilometraje:{"\n"}{carro.kilometraje.toLocaleString()} km</Text>
                <Text style={styles.price}>Valor Estimado:{"\n"}$ {resultado.valorFinal.toLocaleString("es-CO")}</Text>
                <Text style={[styles.tyreStatus, carro.llantasCambio ? styles.badStatus : styles.goodStatus]}>{carro.llantasCambio ? "Llantas para cambio" : "Llantas en buen estado"}</Text>
                {resultado.requierePeritaje && (
                    <Text style={styles.alert}>⚠️ Se recomienda realizar peritaje por superar los 50.000 km</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#616161",
        justifyContent: "center",
        padding: 20,
    },

    card: {
        backgroundColor: "#383838",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#fff",
        padding: 25,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
    },

    info: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 10,
    },

    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#eaff00",
        marginVertical: 12,
    },

    tyreStatus: {
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
    },

    goodStatus: {
        backgroundColor: "#1f6d2a",
        color: "#fff",
    },

    badStatus: {
        backgroundColor: "#8b1e1e",
        color: "#fff",
    },

    alert: {
        marginTop: 20,
        backgroundColor: "#ffcc00",
        color: "#000",
        padding: 12,
        borderRadius: 10,
        fontWeight: "bold",
        textAlign: "center",
    },

    error: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
    },
});