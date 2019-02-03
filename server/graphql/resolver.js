import { getMovies, getMovieDetails } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, yearfrom }) => getMovies( limit, yearfrom ),
        movie: (_, { id }) => getMovieDetails( id )
    }
}

export default resolvers;