import styled from "styled-components";
import { useEffect } from "react";

const PageTitle = styled.h2`
    text-align: center;
    margin: 3% 0;
    font-family: 'Playfair Display', serif;
    font-size: calc(22px + 1.5vw); 
    color: black;
    text-align: center;
`;

const SkillCategory = styled.section`
    border-radius: 8px;
    margin: 2% 5%;
    overflow: hidden; 
    background-color: white; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.25);
`;

const BaseHeader = styled.h3`
    padding: 2% 4%;
    border-radius: 6px 6px 0 0;
    color: white;
    font-size: calc(18px + 0.5vw);
    display: block; 
    font-family: 'Playfair Display', serif;
`;

const DevHeader = styled(BaseHeader)` background-color: #F19C4C; `;
const DesignHeader = styled(BaseHeader)` background-color: #326273; `;

const ChipContainer = styled.ul`
    list-style: none;
    padding: 3% 5%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5%;
    justify-content: center;
`;

const HobbyChip = styled.li`
    padding: 1% 3%;
    border-radius: 25px;
    font-weight: 600;
    font-size: calc(12px + 0.4vw);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    background-color: #F19C4C;
    color: white;
    transition: transform 0.2s ease;
    margin-bottom: 2%;

    &:hover {
        transform: translateY(-3px);
    }
`;

const FactText = styled.p`
    padding: 4% 6%;
    font-size: calc(16px + 0.5vw);
    text-align: center;

    strong {
        color: #BF7245;
        font-size: 1.2em;
    }
`;


export default function Extras() {
    
    useEffect(() => {
            document.title = "Extras | Resume";
        }, []);

    return (
        <>
            <PageTitle>Beyond the Code</PageTitle>

            <SkillCategory>
                <DevHeader>Interests & Hobbies</DevHeader>
                <ChipContainer>
                    <HobbyChip>Weightlifting</HobbyChip>
                    <HobbyChip>Video Games</HobbyChip>
                    <HobbyChip>Board Games</HobbyChip>
                    <HobbyChip>Magic: The Gathering</HobbyChip>
                    <HobbyChip>Tea Collecting</HobbyChip>
                    <HobbyChip>Baking</HobbyChip>
                    <HobbyChip>Painting</HobbyChip>
                </ChipContainer>
            </SkillCategory>

            <SkillCategory>
                <DesignHeader>Fun Fact</DesignHeader>
                <FactText>
                    🏋️‍♀️ I can leg press <strong>800 lbs</strong>!
                </FactText>
            </SkillCategory>
        </>
    );
}