export function calcularRiesgo(precio, kilometraje, llantasCambio) {
    const perdidaPorKm = Math.floor(kilometraje / 1000) * 0.0005;

    let valorFinal = precio - (precio * perdidaPorKm);

    if (llantasCambio) {
        valorFinal -= 500000;
    }

    return {
        valorFinal,
        requierePeritaje: kilometraje > 50000
    };
}