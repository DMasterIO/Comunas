const comunas = require("./data/comunas.json");
const comunaCercana = (lat, long, tolerancia = 5, comunasData = comunas) => {
    
    //Teorema de pitágoras
    comunasData.map((comuna) => {
        let latCateto = comuna.lat - lat;
        let longCateto = comuna.lng - long;
        //111 kilometros por grado
        comuna.dist = 111 * Math.sqrt(latCateto ** 2 + longCateto ** 2); //kilometros
    });
    comunasData.sort((a, b) => {
        if (a.dist > b.dist) return 1;
        if (a.dist < b.dist) return -1;
        return 0;
    });
    let diferencia = comunasData[1].dist - comunasData[0].dist;
        
    //Conurbaciones
    let resultado = diferencia > tolerancia ? comunasData[0] : [comunasData[0], comunasData[1]];
    return resultado;
};
