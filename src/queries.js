import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        movies {
            id
            title
            vote_average
            poster_path
            backdrop_path
            overview
            release_date
        }
    } 
`;

export const MOVIE_DETALS = gql`
    query getMovieDetails($movieId: String){
        movie(id: $movieId) {
            id
            title
            vote_average
            overview    
            poster_path
        }
    }
`;