// ORIGINAL RESPONSES FROM IMDB API, BEFORE DATA GETS MANIPULATED.


// ===================== movie ===================== //
export interface MovieResponse {
  id: string;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  runningTimeInMinutes: number;
  nextEpisode: string;
  numberOfEpisodes: number;
  seriesEndYear: number;
  seriesStartYear: number;
  title: string;
  titleType: string;
  year: number;
  principals: Principal[];
}

export interface Principal {
  id: string;
  legacyNameText: string;
  name: string;
  category: string;
  characters: object[];
  endYear: number;
  episodeCount: number;
  roles: [];
  startYear: number;
}
// ===================== movie ===================== //

 // ====================== actor ====================== //
export interface ActorResponse {
  "@type": "imdb.api.name.bio";
  akas: string[];
  id: string;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  legacyNameText: "string";
  name: string;
  birthDate: string;
  birthPlace: string;
  gender: string;
  heightCentimeters: number;
  nicknames: string[];
  spouses: Spouse[];
  trademarks: string[];
  miniBios: MiniBio[];
}

interface Spouse {
  attributes: string;
  current: boolean;
  fromDate: string;
  id: string;
  name: string;

}

interface MiniBio {
        author: string;
        id: string;
        language: string;
        text: string;
        userId: string;
}
 // ====================== actor ====================== //
