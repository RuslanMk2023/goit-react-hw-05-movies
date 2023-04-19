import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=35263439-f91ab84eb139bac32c923ef32&image_type=photo&orientation=horizontal&per_page=12


// Приклад API-запиту
// https://api.themoviedb.org/3/movie/550?api_key=7dd40cc58e67afad245c810664d7fcf0



// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const API_URL = 'https://api.themoviedb.org/';
const API_KEY = '7dd40cc58e67afad245c810664d7fcf0';
axios.defaults.baseURL = API_URL;

export const  requestToAPI= async (endpoint) => {
  const requestUrl = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`;
  const response = await axios.get(requestUrl);
  return response.data;
};

  //https://api.themoviedb.org/3/trending/movie/day?api_key=7dd40cc58e67afad245c810664d7fcf0
export  const theMoviedbAPI = {
   getTrendingMovieDay : async () => {
    const endpoint = '/trending/movie/day';
    const data = await requestToAPI(endpoint);
    return data.results;
  },
  
  // movie/{movie_id}
  //https://api.themoviedb.org/3/movie/76600?api_key=7dd40cc58e67afad245c810664d7fcf0
   getMovieDetails : async (movieId) => {
    const endpoint = `/movie/${movieId}`;
    return requestToAPI(endpoint);
  },

    // /movie/{movie_id}/credits
  //https://api.themoviedb.org/3/movie/76600?api_key=7dd40cc58e67afad245c810664d7fcf0
  getMovieCast : async (movieId) => {
    const endpoint = `/movie/${movieId}/credits`;
    const data = await requestToAPI(endpoint);
    return data.cast;
  },
}



// export function filteredResponse(response) {
//   return response.map(({ id, webformatURL, largeImageURL }) => ({
//     id,
//     webformatURL,
//     largeImageURL,
//   }));
// }