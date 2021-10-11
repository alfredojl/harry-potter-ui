# Harry Potter UI
---
### Instalación:
Después de hacer la respectiva clonación, nos movemos a la carpeta *hpui* e ingresamos el comando `yarn install`. A pesar de poder instalarse con `npm install`, este último genera conflictos con algunos paquetes.

## Despliegue
Para desplegar el proyecto se puede utilizar un paquete llamado *serve* (`npm i -g serve`) o *http-serve* (`npm i -g http-serve`).

Estando en la carpeta de *hpui* vamos a contruir la carpeta de producción con el siguiente comando:
```
yarn build
```

Esto nos generará una carpeta llamada *"build"*, la cual contiene todo lo del proyecto.

En el caso de *serve*, tendremos que ejecutar:
```
serve docs
```
Para el caso de *http-serve*, nos movemos dentro de la carpeta *build* y ejecutamos:
```
http-serve docs
```
---

# Preguntas
### ¿Qué es lo que más te gustó de tu desarrollo?
Dado que no había trabajado con React, tuve que tomar un curso intensivo de dos días para poder realizar el proyecto, y es justo lo que me gustó: el aprender algo nuevo, además del reto de realizar un proyecto y aprender la tecnología paralelamente.

### Si hubieras tenido más tiempo, ¿qué hubieras mejorado o qué más hubieras hecho?
Con más timepo, hubiera terminado de aprender React para implementar de una mejor manera el proyecto, ya que lo siento muy carente. Además hubiera implementado también el despliegue del back y mejorado el estilo, agregado más filtros, animaciones.

### Descríbenos un pain point o bug con el que te hayas encontrado y cómo lo solucionaste.
Vengo de VueJS, así que el reto fue el estilizar la página, ya que tenía mucho tiempo que no utilizaba CSS. Aprender los hooks y aplicarlos me provocó mucho tiempo de inversión, pero terminó funcionando. Además, no logré desplegar el front correctamente.