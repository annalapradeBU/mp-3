import {Link} from"react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #326273;
    color: white;
    /* we'll center it this time, just looks better */
    text-align: center;
`;

const StyledFooterLink = styled(Link)`
    color: white;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
        color: #7DC4D4;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All rights reserved by Anna LaPrade {" "}
                <StyledFooterLink to="/credits">Credits</StyledFooterLink> {" "}
                &#169;
            </p>
        </StyledFooter>
    );
}
