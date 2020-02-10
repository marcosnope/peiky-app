## Available Scripts

In the project directory, you can run:

### `yarn`
To install the respective packages for running the app

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Components

`Home`

It has the responsibility of loading its children components, in charge of providing the information of the films (Popular, Most viewed, upcoming releases)
[API](https://developers.themoviedb.org/3/movies/get-popular-movies)

`CardFilm`
Connected component responsible for showing the detail of each movie and being able to access its respective trailer.

`VideoPlayer`
Component that by means of react-youtube allows to load the trailer of each selected movie

## Preguntas

1. ¿ En qué consiste el principio de responsabilidad única? ¿Cuál es su propósito? 
R: La responsabilidad unica consiste en que cada unidad de código debe realizar una única cosa, por ejemplo si una
función en su declaracion es lo mas descriptiva posible y realiza una accion especifica (Ejemplo: Crear usuario) su contenido debe estar enfoncado especificamente en ello. El codigo básicamente debería ser creado como una receta de cocina.

2. ¿Qué características tiene, según su opinión, un “buen” código o código limpio?
R: En mi opinion un codigo limpio es basicamente que respete el principio SOLID.
