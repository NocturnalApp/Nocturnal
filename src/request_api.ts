const key = '50674bd62cf713eedbc7bd60288e0dbd' //API key used to authenticate requests to the TMDb API.

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestAnimes: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=16&with_keywords=210024`,
    requestTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`

  };

  export default requests