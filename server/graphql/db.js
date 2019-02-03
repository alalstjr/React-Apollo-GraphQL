import fetch from "node-fetch";

const API_URL = "https://api.themoviedb.org/3/movie/";
const API = 'api_key=cc64c6557049f30c34c1e9ad032c0072';
const LANG = 'language=ko-KR';

export const getMovies = (limit, yearfrom) => {
    let REQUEST_URL = API_URL;

    REQUEST_URL += `upcoming?${API}&${LANG}`;

    if (limit > 0) 
        REQUEST_URL += `&display=${limit}&${API}&${LANG}`;
    
    if( yearfrom > 0 )
        REQUEST_URL += `&yearfrom=${yearfrom}&${API}&${LANG}`;

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then((json) => json.results);
}

export const getMovieDetails = (id) => {
    let REQUEST_URL = API_URL;

    REQUEST_URL += `${id}?${API}&${LANG}`;
    
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then((json) => {
            return json
        });
}