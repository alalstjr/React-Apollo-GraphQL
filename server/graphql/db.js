import fetch from "node-fetch";
const API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=cc64c6557049f30c34c1e9ad032c0072&language=ko-KR&page=1";

export const getMovies = (limit, yearfrom) => {
    let REQUEST_URL = API_URL;
    
    if (limit > 0) {
        REQUEST_URL += `&display=${limit}`;
    }

    if( yearfrom > 0 )
        REQUEST_URL += `&yearfrom=${yearfrom}`;

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.results);
}