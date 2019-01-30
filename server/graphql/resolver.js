import { getMovies  } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, yearfrom }) => getMovies(limit, yearfrom)
    }
}

export default resolvers;