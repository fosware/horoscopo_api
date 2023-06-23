# Horóscopos API - Node MongoDB 
(En construcción)

<p align="center">
  <img src="https://images.freeimages.com/clg/istock/previews/9639/96395693-zodiac-circle-with-horoscope-signs.jpg" width="500" alt="Zodiac" />
</p>

## Consulta tu signo zodiacal: 

- Obtiene los datos de una fuente externa directamente de una consulta HTTP.
- La respuesta es un objeto JSON.
- Este objeto JSON lo graba en una BD de MongoDB.
- Consulta la API.

## Es necesario tener un cuenta en MondoBD Atlas
Completa el archivo ```.env```

## Ejecutar el archivo de semilla, para ingresar la información general de los signos:
```
node db/seeds/seed.js
```

## Inserta el horoscopo del día de cada signo a la BD
```
http://localhost:3000/api/horoscopos/obtener-y-guardar

```

## Consulta un signo desde la BD:
```
http://localhost:3000/api/horoscopo/:signo
```

Donde ```signo``` puede ser: 

```
aries,
tauro,
geminis,
cancer,
leo,
virgo,
libra,
escorpio,
sagitario,
capricornio,
acuario,
piscis
```

## (TODO)

- ~~Validar el insertar sólo un signo por día.~~
- Crear el Front.
- Reestructurar el código.
- Deploy.
- Programar la inserción de datos todos los días.