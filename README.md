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
