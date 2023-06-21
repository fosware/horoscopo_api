# Node API MongoDB

<p align="center">
  <img src="https://images.freeimages.com/clg/istock/previews/9639/96395693-zodiac-circle-with-horoscope-signs.jpg" width="500" alt="Zodiac" />
</p>

# Horóscopos API
(En construcción)

## Consulta tu signo zodiacal: 

- Obtiene los datos de una fuente externa directamente de una consulta HTTP.
- La respuesta es un objeto JSON.
- Este objeto JSON lo graba en una BD de MongoDB.
- Consulta la API.

## Inserta todos los signos a la BD


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


#TODO

- Validar el insertar sólo un signo por día.
- Programar la inserción de datos todos los días.
- Crear el Front.
- Reestructurar el código.
