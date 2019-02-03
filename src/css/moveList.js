import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const MovieBox = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;y
    margin-top: 50px;
    grid-gap: 25px;
`;

export const MovieList = styled.li`
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 40px;
    position: relative;
    width: 100%;
    background-color: rgb(255,255,255,0.9);
`;

export const Title = styled.h1`
    font-size: ${props => props.fontSize}px;
    text-align: center;
    margin: 20px 0;
`;

export const ImgBox = styled.div`
    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    background-position: center center;
    height: 300px;
    width: 200px;
    margin: 0 auto;
`;

export const Paragraph = styled.p`
    text-align: justify;
    word-break: keep-all;
    ${props => props.last === true ? '' : 'margin-bottom: 15px'};
`;

export const TextWrap = styled.div`
    padding: 30px;
`;