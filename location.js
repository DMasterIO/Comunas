const comunas = require("./data/comunas.json");
const comunaCercana = (lat, long, KM_TOLERANCIA = 5) => {
    const KM_POR_GRADO = 11;
    //Teorema de pitágoras
    comunas.map((comuna) => {
        const latCateto = comuna.lat - lat;
        const longCateto = comuna.lng - long;
        //111 kilometros por grado
        comuna.dist = KM_POR_GRADO * Math.sqrt(latCateto ** 2 + longCateto ** 2); //kilometros
    });
    comunas.sort((a, b) => {
        if (a.dist > b.dist) return 1;
        if (a.dist < b.dist) return -1;
        return 0;
    });
    const km_diferencia = comunas[0].dist - comunas[1].dist;

    //Conurbaciones
    const resultado = km_diferencia > KM_TOLERANCIA ? comunas[0] : [comunas[0], comunas[1]];
    return resultado;
};
// console.log('resultado', comunaCercana(-29.950179, -71.273715));

module.exports = {
    comunaCercana, comunas
}