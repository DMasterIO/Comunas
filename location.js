const comunas = require("./data/comunas.json");
const comunaCercana = (comunas, lat, long) => {
    
    let latCateto = 0;
    let longCateto = 0;
    //Teorema de pitágoras
    comunas.map((comuna) => {
        latCateto = comuna.lat - lat;
        longCateto = comuna.lng - long;
        //111 kilometros por grado
        comuna.dist = 111 * Math.sqrt(latCateto ** 2 + longCateto ** 2); //kilometros
    });
    comunas.sort((a, b) => {
        if (a.dist > b.dist) return 1;
        if (a.dist < b.dist) return -1;
        return 0;
    });
    let diferencia = comunas[0].dist - comunas[1].dist;
    
    //Conurbaciones
    let tolerancia = 5;
    let resultado = diferencia > tolerancia ? comunas[0] : [comunas[0], comunas[1]];
    return resultado;
};
//let resultado= comunaCercana(comunas,-29.950179, -71.273715);
//console.log(resultado)
module.exports = {
    comunaCercana
}