import styled, { createGlobalStyle } from 'styled-components';
import reset from './reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
`;

export const BgWrap = styled.div`
    background-color: rgb(223, 230, 233);
`;