const comunas = require("./data/comunas.json");
const comunaCercana = (lat, long, tolerancia = 5) => {
    
    //Teorema de pitágoras
    comunas.map((comuna) => {
        let latCateto = comuna.lat - lat;
        let longCateto = comuna.lng - long;
        //111 kilometros por grado
        comuna.dist = 111 * Math.sqrt(latCateto ** 2 + longCateto ** 2); //kilometros
    });
    comunas.sort((a, b) => {
        if (a.dist > b.dist) return 1;
        if (a.dist < b.dist) return -1;
        return 0;
    });
    let diferencia = comunas[1].dist - comunas[0].dist;
        
    //Conurbaciones
    let resultado = diferencia > tolerancia ? comunas[0] : [comunas[0], comunas[1]];
    return resultado;
};
