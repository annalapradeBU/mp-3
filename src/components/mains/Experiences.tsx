import styled from "styled-components";

const SkillCategory = styled.section`
    border-radius: 8px;
    margin: 2% 5%;
    overflow: hidden; 
    background-color: white; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.25);
    padding-bottom: 2%;
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

const DesignHeader = styled(BaseHeader)` background-color: #326273; `;
const DataHeader = styled(BaseHeader)` background-color: #BF7245; `;

const JobInfo = styled.div`
    padding: 0 4%;
    h4 { color: #326273; margin-bottom: 1%;  font-size: calc(14px + 0.8vw);}
    p { font-style: italic; color: #555; margin-bottom: 2%;  font-size: calc(12px + 0.5vw);}
`;

const AchievementList = styled.ul`
    margin: 1% 5% 3% 8%;

    li {
        font-size: calc(11px + 0.5vw);
        margin-bottom: 1%;
    }
`;

const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5%;
    padding: 2% 4% 3% 4%;
`;

const BaseChip = styled.span`
    padding: 1% 3%;
    border-radius: 20px;
    font-weight: 600;
    font-size: calc(10px + 0.4vw);
    color: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const DesignChip = styled(BaseChip)` background-color: #326273; `;
const DataChip = styled(BaseChip)` background-color: #BF7245; `;

const PageTitle = styled.h2`
    text-align: center;
    margin: 3% 0;
    font-family: 'Playfair Display', serif;
    font-size: calc(22px + 1.5vw);
    color: #326273;
`;


export default function Experiences() {
    return (
        <>
            <PageTitle>Professional Experience</PageTitle>

            {/* Terrier Motorsport */}
            <SkillCategory>
                <DesignHeader>Terrier Motorsport, Boston University</DesignHeader>
                <JobInfo>
                    <p><strong>Lead of Software Team</strong> | Dec 2022 - Present</p>
                </JobInfo>
                <AchievementList>
                    <li>Led 6 team members in developing a racing Dash Display System, reducing driver cognitive load by optimizing real-time telemetry visualization.</li>
                    <li>Instituted project guidelines, Git workflow, documentation standards, and onboarding procedures, ensuring team efficiency.</li>
                    <li>Mentored 20+ members in debugging and UI; coordinated with mechanical/electrical teams for software integration.</li>
                </AchievementList>
                <ChipContainer>
                    <DesignChip>Python (Flask)</DesignChip>
                    <DesignChip>HTML/CSS</DesignChip>
                    <DesignChip>Git Workflow</DesignChip>
                    <DesignChip>Telemetry</DesignChip>
                </ChipContainer>
            </SkillCategory>

            {/* NRL  */}
            <SkillCategory>
                <DataHeader>Naval Research Laboratory</DataHeader>
                <JobInfo>
                    <p><strong>Intern</strong> | May 2025 - Aug 2025</p>
                </JobInfo>
                <AchievementList>
                    <li>Analyzed inter-packet delay data to model network noise and evaluate error correction code.</li>
                    <li>Implemented BCH and Reed–Solomon error-correction, improving valid message delivery from ~0.09% to ~100%.</li>
                    <li>Built visualization tools including spectrograms, heat maps, and scatter plots.</li>
                </AchievementList>
                <ChipContainer>
                    <DataChip>Python</DataChip>
                    <DataChip>C++</DataChip>
                    <DataChip>Matplotlib</DataChip>
                    <DataChip>NumPy/SciPy</DataChip>
                </ChipContainer>
            </SkillCategory>
        </>
    );
}