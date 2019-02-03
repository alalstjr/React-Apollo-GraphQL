import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

import { Movie } from "./Movie";
import { Container, MovieBox } from './css/moveList';

const Home = () => (
    <Container>
        <MovieBox>
            <Query query={HOME_PAGE}>
                {({ loading, data, error }) => {
                    if(loading)
                        return "Loading";
                    if(error)
                        return "Error";
                    if(data)
                        console.log(data);
                        // 영화 내역들을 object로 받아온다.
                        // return "Data";
                        return data.movies.map(
                            movie =>
                                <Movie
                                    id={movie.id}
                                    key={movie.id}
                                    poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    date={movie.release_date}
                                    overview={movie.overview}
                                />
                        );
                }}
                {/* 위 함수는 무조건 Component 를 반환해야 합니다. */}
            </Query>
        </MovieBox>
    </Container>     
);

export default Home;