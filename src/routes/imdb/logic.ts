import { MovieResponse, Principal, ActorResponse } from "../../entities/imdb/IImdb";
import { Movie } from "../../entities/movie/IMovie";
import axios from "axios";
import path from "path";

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

const ApiKey: any = process.env.API_KEY;

axios.defaults.headers.common["x-rapidapi-host"] = "imdb8.p.rapidapi.com";
axios.defaults.headers.common["x-rapidapi-key"] = ApiKey;

export async function getMovieByName(movieName: string): Promise<Movie> {
  const response = await axios.get(`https://imdb8.p.rapidapi.com/title/find?q=${movieName}`)

  /* response holds an array of several results. 9/10 the first one is the good one, the others are fake or trash.
    so I chose to take only the first one, that should do. */
  return _processMovieData(response.data.results[0])
}


function _processMovieData(data: MovieResponse) {
  const mainActors: string[] = [];
  
  // get actors names array. 
  data.principals && data.principals.forEach((actor: Principal) => mainActors.push(actor.name));

  return {
    title: data.title,
    imgUrl: data.image ? data.image.url : "",
    type: data.titleType === "tvSeries" ? "series" : "movie",
    mainActors,
    imdbId: data.id,
    startedAt: data.year,
  };

}


export async function getActorByName(actorName: string) {
  // function is not done. 
  const response: ActorResponse = await axios.get(
    `https://imdb8.p.rapidapi.com/title/find?q=${actorName}`
  );
  return _processActorData(response);
}

function _processActorData(data: ActorResponse) {
  // function isn't done yet.
  return 0;
}