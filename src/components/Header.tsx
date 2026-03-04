import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #326273;
    color: white;
    padding: 2%;
    width: 100%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    text-align: left;

    /* media query! */
    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const StyledTitle = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: calc(18px + 3vw);
    margin: 0;
`;


export default function Header(){
    return(
        <StyledHeader>
                <StyledTitle>Anna's Resume</StyledTitle>
                <p>A website showcasing items from Anna's resume with more detail- and sometimes photos!</p>
        </StyledHeader>
    );
}