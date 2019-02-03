import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { MovieList, ImgBox, Title, TextWrap, Paragraph } from './css/moveList';

export const Movie = ({ id, title, rating, date, overview, poster }) => (
  <MovieList key={id}>
    <Link to={`/details/${id}`}>
        <Title fontSize={18}>{title}</Title>
        <ImgBox img={poster} />
        <TextWrap>
            <Paragraph>개봉일: {date}</Paragraph>
            <Paragraph>평점: {rating}</Paragraph>
            <Paragraph last={true}>
                {overview ? overview : '등록된 정보가 없습니다.'}
            </Paragraph>
        </TextWrap>
    </Link>
  </MovieList>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};
