import {Link} from"react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 20%;
    background-color: #7DC4D4;

    /* media queries! */
    @media screen and (max-width: 1000px) {
        width: 30%;
        max-width: 30%;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        max-width: 100%;
    }
`;

const StyledList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
    }
`;

const StyledListItem = styled.li`
    border: calc(2px + .2vw) solid white;
    margin: 5% auto;
    width: 80%;
    padding: 1%;
    text-align: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
    /* have used in other classes, makes more dynamic */
    transition: all 0.3s ease;

    /* have used in other classes, makes hovering over it more clear */
    &:hover {
        background-color: #F19C4C;
    }

    @media screen and (max-width: 750px) {
        width: 15%;
        margin: 1.4% 0.5%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #2c3e50;
    font-size: calc(2px + 1.3vw);
    display: block;
    text-align: center;
    padding: calc(2px + 1vw);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    font-weight: 600;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledListItem>
                
                <StyledListItem>
                    <StyledLink to="/education">Education</StyledLink>
                </StyledListItem>
                
                <StyledListItem>
                    <StyledLink to="/experience">Experience</StyledLink>
                </StyledListItem>
                
                <StyledListItem>
                    <StyledLink to="/projects">Projects</StyledLink>
                </StyledListItem>
                
                <StyledListItem>
                    <StyledLink to="/skills">Skills</StyledLink>
                </StyledListItem>
                
                <StyledListItem>
                    <StyledLink to="/extras">Extras</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}