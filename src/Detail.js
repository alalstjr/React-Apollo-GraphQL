import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETALS } from './queries';

const Detail = ({
    match: {
        params: { movieId }
    }
}) => <Query query={MOVIE_DETALS} variables={{ movieId }}>
{({loading, error, data}) => {
    if(loading) return "loading";
    if(error) return "error";
    return (
        <React.Fragment>
            {data.movie.id}
            {data.movie.title}
            {data.movie.overview}
            {data.movie.vote_average}
            {data.movie.poster_path}
        </React.Fragment>
    )
}}</Query>;

export default Detail;