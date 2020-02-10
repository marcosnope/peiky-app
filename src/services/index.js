const token = "355d83ccecf82a6e02a85db5d56825a7";

async function get(route, language = "es-ES", page = "1") {
  const request = await fetch(
    `https://api.themoviedb.org/3/${route}?api_key=${token}&language=${language}&page=${page}`,
    {
      method: "GET"
    }
  );
  let data = {};
  try {
    data = await request.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}

const services = {
  getPopular: _ => get('movie/popular'),
  getTopRated: _ => get('movie/top_rated'),
  getUpcoming: _ => get('movie/upcoming'),
  getVideo: idFilm => get(`movie/${idFilm}/videos`)
};

export { services }