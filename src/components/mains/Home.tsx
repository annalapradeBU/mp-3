import { Link } from "react-router";
import styled from "styled-components";

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


const SkillList = styled.div`
    list-style: none;
    padding: 2% 4%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5%;
`;

const Chip = styled(Link)`
    padding: 2% 4%;
    border-radius: 25px;
    font-weight: 600;
    font-size: calc(12px + 0.4vw);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    text-decoration: none;
    background-color: #BF7245;
    color: white;

    &:hover {
        transform: translateY(-3px);
    }
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

/* specific component for the orange header */
const OrangeHeader = styled(BaseHeader)`
    background-color: #F19C4C;
`;

/* specific component for the blue header */
const DarkOrangeHeader = styled(BaseHeader)`
    background-color: #BF7245;
`;

const ProfileImage = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const HomeContent = styled.div`
    padding: 4% 6%;
    
    h2 {
        font-size: calc(18px + 1vw);
        margin-bottom: 2%;
        color: #326273;
    }

    p {
        font-size: calc(14px + 0.5vw);
        margin-bottom: 3%;
    }
`;

export default function Home() {
    return (
        <>
            <PageTitle>Home</PageTitle>


            <SkillCategory>
                
                <OrangeHeader>Welcome</OrangeHeader>

                {/* StyledMain logic in App.tsx handles the img centering/width */}
                <ProfileImage 
                    src="/me.png" 
                    alt="Anna LaPrade doing a silly pose next to a statue" 
                />

                <HomeContent>
                    <h2>Hi, I’m Anna LaPrade!</h2>

                    <p>
                        I’m a <strong>Computer Science</strong> student at <strong>Boston University</strong> who loves building things that feel good to use.
                        My favorite work sits at the intersection of clean UI design, data visualization, and full-stack
                        engineering.
                    </p>

                    <p>
                        I’ve worked on everything from racecar dash displays to noise-resistant communication
                        tools at the Naval Research Lab. I especially enjoy taking messy, complex problems and shaping
                        them into simple interactive experiences.
                    </p>
                </HomeContent>
            </SkillCategory>

            <SkillCategory>
                <DarkOrangeHeader>Quick Links</DarkOrangeHeader>
                <SkillList>
                    <Chip to="/projects">View My Projects</Chip>
                    <Chip to="/experience">Work History</Chip>
                    <Chip to="/extras">About Me</Chip>
                </SkillList>
            </SkillCategory>
        </>
    );
}