import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
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
                        <li key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <p>{movie.vote_average}</p>
                            <p>{movie.overview}</p>
                            <p>{movie.release_date}</p>
                        </li>
                );
        }}
        {/* 위 함수는 무조건 Component 를 반환해야 합니다. */}
    </Query>
);

export default Home;