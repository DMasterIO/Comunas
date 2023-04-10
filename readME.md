# ¿En qué Comuna de Chile estoy?
#### Para uso de desarrolladores, sin interfaz o flujo de interaccion con users.

### Permite obtener la comuna de Chile, subdiviciòn de tercer orden, cuyo centro esté mas cercana la coordenada simple ingresada.


### Se calcula la distancia con centros comunales. 
### En el caso de courbaciones puede definirse en la variable tolerancia, cuando se entregarán 2 resultados en un arreglo. Desabilitar condicional si no es necesario

### Pre-requisitos 📋

NodeJS
chrome o edge

### Instalación 🔧

No es necesario instalar
1. En terminal, en la ruta del repositorio, para ver el ejemplo ejecutar
````
node location.js
````
2. Entregará el resultado de coordenadas -29.950179, -71.273715 correspondientes a Coquimbo cernano al límite con La serena


##  🔩
### Correciones
Parametros de la función
1. *lat* Latitud simple
2. *long* Longitud simple
3. *tolerancia* Por defecto se consideran 5 kilometros. Distancia en kilómetros entre los dos centros de comunas más cercanos que permite definir si se retornará una comuna o dos comunas tentativas
4. *comunas* Por defecto recibe el arreglo incluido a la fecha. Arreglo de objetos que debe contener objetos con nombre de comuna, latitud y longitud simples del centro de ellas,  con el siguientes claves 
````
    "name": "Nombre de comuna",
        "lng": -70.6666667,
        "lat": -33.45
````

## Autores ✒️

- **Maria Jose Tolmo** - _back-end_ - [mariajosetolmo](https://github.com/mariajosetolmo)