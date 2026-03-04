import styled from "styled-components";

const PageTitle = styled.h2`
    text-align: center;
    margin: 3% 0; /* Converted from 20px */
    font-family: 'Playfair Display', serif;
    font-size: calc(22px + 1.5vw); /* Responsive font requirement */
    color: #326273;
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

/* header variants */
const DevHeader = styled(BaseHeader)` background-color: #F19C4C; `;
const DataHeader = styled(BaseHeader)` background-color: #BF7245; `;
const DesignHeader = styled(BaseHeader)` background-color: #326273; `;

const SkillsList = styled.ul`
    list-style: none;
    padding: 3% 5%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5%;
    justify-content: center;
`;

const BaseChip = styled.li`
    padding: 1% 3%;
    border-radius: 25px;
    font-weight: 600;
    font-size: calc(12px + 0.4vw);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    color: white;
    margin-bottom: 2%;

    &:hover {
        transform: translateY(-3px);
    }
`;

/* chip variants */
const DevChip = styled(BaseChip)` background-color: #F19C4C; `;
const DataChip = styled(BaseChip)` background-color: #BF7245; `;
const DesignChip = styled(BaseChip)` background-color: #326273; `;



export default function Skills() {
    return (
        <>
            <PageTitle>Technical Skills</PageTitle>

            {/* programming section */}
            <SkillCategory>
                <DevHeader>Programming & Web Development</DevHeader>
                <SkillsList>
                    <DevChip>Python</DevChip>
                    <DevChip>HTML / CSS / JavaScript</DevChip>
                    <DevChip>Tailwind CSS / TypeScript</DevChip>
                    <DevChip>Django</DevChip>
                    <DevChip>React</DevChip>
                    <DevChip>Node.js</DevChip>
                    <DevChip>Flask</DevChip>
                    <DevChip>Git</DevChip>
                    <DevChip>C++</DevChip>
                </SkillsList>
            </SkillCategory>

            {/* data section */}
            <SkillCategory>
                <DataHeader>Data, Visualization, & ML</DataHeader>
                <SkillsList>
                    <DataChip>SQL / SQLite</DataChip>
                    <DataChip>MongoDB</DataChip>
                    <DataChip>Pandas</DataChip>
                    <DataChip>NumPy</DataChip>
                    <DataChip>Matplotlib</DataChip>
                    <DataChip>Scikit-learn</DataChip>
                    <DataChip>XGBoost</DataChip>
                </SkillsList>
            </SkillCategory>

            {/* design section */}
            <SkillCategory>
                <DesignHeader>Design & UI</DesignHeader>
                <SkillsList>
                    <DesignChip>Adobe Illustrator</DesignChip>
                    <DesignChip>Adobe Photoshop</DesignChip>
                    <DesignChip>Figma</DesignChip>
                </SkillsList>
            </SkillCategory>
        </>
    );
}