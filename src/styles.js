import styled from 'styled-components';

const AppContainer = styled.main `
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 25px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
`;

const AppHeader = styled.header`
    padding: 25px; 
    box-sizing: border-box;
    background-color: #008b8b;
`;

const HeaderTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 24px;
`;

export { AppContainer, AppHeader, HeaderTitle }