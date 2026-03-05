import styled from "styled-components";

// https://www.w3schools.com/tags/tag_section.asp
// I've heard its better practice than just a div sometimes for a thematic grouping of content
// (have also used in other classes... lol. I did a lot of fun css stuff)
const SkillCategory = styled.section`
    /* this doesn't have to be responsive, right? */
    border-radius: 8px;
    margin: 2% 5%;
    overflow: hidden; 
    background-color: white; 
    /* used in prior classes */ 
    box-shadow: 0 4px 15px rgba(0,0,0,0.25);
`;

const BaseHeader = styled.h3`
    padding: 2% 4%;
    border-radius: 6px 6px 0 0;
    color: white;
    font-size: calc(18px + 0.5vw);
    margin-bottom: 2%;
    display: block; 
    font-family: 'Playfair Display', serif;
`;

// allows me to use the base component and then just add the new color to it 
// instead of requiring multiple components (boo)
// https://styled-components.com/docs/basics#extending-styles
const DevHeader = styled(BaseHeader)`
    background-color: #F19C4C;
`;

const EduDetails = styled.div`
    padding: 3% 5%;
    
    /* made a little bigger than original, just looks better */ 
    h4 {
        font-size: calc(14px + 1vw);
        margin-bottom: 1%;
    }

    p {
        margin-bottom: 1%;
    }
`;

const AchievementList = styled.ul`
    margin: 1% 0 2% 5%;
`;

const ChipContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5%;
    margin-top: 2%;
`;

const DevChip = styled.li`
    padding: 1% 3%;
    border-radius: 25px;
    /* idk if we've used this in class, but I've used it before. changes font thickeness */
    font-weight: 600;
    font-size: calc(12px + 0.4vw);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    background-color: #F19C4C;
    color: white;
    margin-bottom: 2%;

    /* cute little hover transition to improve intuitive design/add whimsy, learned in other classes */
    &:hover {
        transform: translateY(-3px);
    }
`;

const PageTitle = styled.h2`
    text-align: center;
    margin: 3% 0;
    font-family: 'Playfair Display', serif;
    font-size: calc(22px + 1.5vw); 
    color: black;
    text-align: center;
`;


export default function Education() {
    return (
        <>
            <PageTitle>Academic Background</PageTitle>

            <SkillCategory>
                <DevHeader>Boston University</DevHeader>
                
                <EduDetails>
                    <h4>B.A. in Computer Science & Political Science</h4>
                    <p>Graduating: <strong>May 2026</strong></p>

                    <AchievementList>
                        <li><strong>GPA:</strong> 3.76 / 4.0</li>
                        <li><strong>Honors:</strong> Dean's List (All Semesters)</li>
                    </AchievementList>

                    <p><strong>Relevant Coursework:</strong></p>
                    <ChipContainer>
                        <DevChip>Data Structures</DevChip>
                        <DevChip>Analysis of Algorithms</DevChip>
                        <DevChip>Software Engineering</DevChip>
                        <DevChip>Probability in Computing</DevChip>
                        <DevChip>Constitutional Law</DevChip>
                    </ChipContainer>
                </EduDetails>
            </SkillCategory>
        </>
    );
}