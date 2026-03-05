import { useState } from "react";
import styled from "styled-components";

const PageTitle = styled.h2`
    text-align: center;
    margin: 3% 0;
    font-family: 'Playfair Display', serif;
    font-size: calc(22px + 1.5vw);
    color: #326273;
`;

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

/* color variants */
const DevHeader = styled(BaseHeader)` background-color: #F19C4C; `;
const DataHeader = styled(BaseHeader)` background-color: #BF7245; `;
const DesignHeader = styled(BaseHeader)` background-color: #326273; `;

const ProjectSubHeader = styled.p`
    padding: 0 4%;
    font-size: calc(12px + 0.5vw);
    margin-bottom: 1%;
`;

const ExternalLinkWrapper = styled.div`
    padding: 4%;
    p { 
        font-size: calc(12px + 0.5vw); 
        margin-bottom: 2%; 
    }
`;

const AchievementList = styled.ul`
    margin: 1% 5% 3% 8%;
`;

const ChipContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5%;
    padding: 0 4%;
`;

/* base chip logic */
const BaseChip = styled.span`
    padding: 1% 3%;
    border-radius: 20px;
    font-weight: 600;
    font-size: calc(10px + 0.4vw);
    color: white;
`;


/* chip variants */
const DevChip = styled(BaseChip)` background-color: #F19C4C; `;
// not used, but it could be! (if i added more projects)
/* const DataChip = styled(BaseChip)` background-color: #BF7245; `; */
const DesignChip = styled(BaseChip)` background-color: #326273; `;

const ExternalChip = styled.a`
    padding: 1.5% 4%;
    border-radius: 25px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block; 
    
    background-color: #BF7245; 
    color: white;
    
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        background-color: #A05A32;
        color: white;
    }
`;

/* calculator specific styles */
const CalcInputs = styled.div`
    display: flex;
    padding: 3% 5%;
    gap: 2%;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    
    input {
        width: 100%;
        padding: 4%;
        border: 2px solid #7DC4D4;
        border-radius: 8px;
        font-size: calc(14px + 0.4vw);
    }
`;

const Controls = styled.div`
    display: flex;
    justify-content: center;
    gap: 2%;
    margin-bottom: 3%;
    padding: 0 5%;
    
    button {
        padding: 2% 4%;
        background-color: #326273;
        color: white;
        border: none;
        border-radius: 5px;
        /* so its even more obvious you're hovering over a button, learned in toher courses */
        cursor: pointer;
        font-weight: bold;
        font-size: calc(14px + 0.4vw);
        /* hover stuff I've used in other courses, just makes it a little more usebable/interactive */
        &:hover { background-color: #5C9EAD; }
    }
`;

const OutputDisplay = styled.div`
    margin: 3% 5%;
    padding: 4%;
    border-top: 2px dashed #7DC4D4;
    font-size: calc(18px + 1vw);
    font-weight: bold;
    text-align: center;
    color: #326273;

    /* checks if the output has the negative class, applies it if so */
    /* learned this for my final project in another class to avoid inline stlying because I think it looks gross tbh */
    &.negative {
        color: red;
    }
`;

export default function Projects() {
    // resplaces document.getElementById().value because React
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string | number>("Result will appear here...");

    function doAddition() {
        setResult(Number(num1) + Number(num2));
    }

    function doSubtraction() {
        setResult(Number(num1) - Number(num2));
    }

    function doMultiplication() {
        setResult(Number(num1) * Number(num2));
    }

    function doDivision() {
        const n1 = Number(num1);
        const n2 = Number(num2);
        // check if divisable by 0, throw an error if not 
        setResult(n2 !== 0 ? n1 / n2 : "Error (Div by 0)");
    }

    function doPower() {
        const base = Number(num1);
        const exponent = Number(num2);
        let temp = 1;

        // check if negative or positive 
        // note: changed because I used math.abs, and while that's not pow, I'm not taking my chances lol
        let limit;
        if (exponent < 0) {
            limit = -exponent;
        } else {
            limit = exponent;
        }

        for (let i = 0; i < limit; i++) {
            temp *= base;
        }

        // "flip" it if it's negative 
        let finalRes;
        if (exponent < 0) {
            finalRes = 1 / temp;
        } else {
            finalRes = temp;
        }

        setResult(finalRes);
    }

    function doClear() {
        setNum1("");
        setNum2("");
        setResult("");
    }

    // check if negative and a number
    const isNegative = typeof result === 'number' && result < 0;


    return (
        <>
            <PageTitle>Technical Projects</PageTitle>

            {/* Cafe Passport */}
            <SkillCategory>
                <DesignHeader>Cafe Passport</DesignHeader>
                <ProjectSubHeader><strong>Interactive Full-Stack Web Application</strong></ProjectSubHeader>
                <AchievementList>
                    <li>Architected multi-model data transactions using Django Nested Formsets.</li>
                    <li>Engineered a real-time media editor via Vanilla JS and Interact.js.</li>
                </AchievementList>
                <ChipContainer>
                    <DesignChip>Django</DesignChip>
                    <DesignChip>Vanilla JS</DesignChip>
                    <DesignChip>Interact.js</DesignChip>
                </ChipContainer>
            </SkillCategory>

            {/* Eggcellent Timer */}
            <SkillCategory>
                <DevHeader>Eggcellent Timer</DevHeader>
                <ProjectSubHeader><strong>Full-Stack Flask Application</strong></ProjectSubHeader>
                <AchievementList>
                    <li>Utilized geolocation to automate altitude-based boiling point adjustments.</li>
                </AchievementList>
                <ChipContainer>
                    <DevChip>Flask</DevChip>
                    <DevChip>APIs</DevChip>
                    <DevChip>Geolocation</DevChip>
                </ChipContainer>
            </SkillCategory>

            {/* Portfolio */}
            <SkillCategory>
                <DataHeader>External Portfolio</DataHeader>
                <ExternalLinkWrapper>
                    <p>Check out more of my work in detail:</p>
                    {/* not using Link because this is an external link to a real page 
                    https://www.geeksforgeeks.org/reactjs/link-and-navlink-components-in-react-router-dom/
                    */}
                    <ExternalChip
                        href="https://cs-webapps.bu.edu/alaprade/portfolio/home"
                        // opens a new tab
                        // https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab
                        target="_blank"
                        // security requirement!
                        rel="noopener noreferrer"
                    >
                        View Full Portfolio
                    </ExternalChip>
                </ExternalLinkWrapper>
            </SkillCategory>

            {/* Calculator */}
            <SkillCategory>
                <DesignHeader>JavaScript Calculator</DesignHeader>
                <CalcInputs>
                    <InputGroup>
                        <label htmlFor="num1">First Number</label>
                        <input id="num1" type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="num2">Second Number</label>
                        <input id="num2" type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </InputGroup>
                </CalcInputs>

                <Controls>
                    <button onClick={doAddition}>+</button>
                    <button onClick={doSubtraction}>-</button>
                    <button onClick={doMultiplication}>*</button>
                    <button onClick={doDivision}>/</button>
                    <button onClick={doPower}>**</button>
                    <button onClick={doClear}>Clear</button>
                </Controls>

                <OutputDisplay
                    id="output"
                    // if number isn't negative, it doesn't get the class, gets empty class instead (so, no class!)
                    className={isNegative ? "negative" : ""}
                >
                    {result}
                </OutputDisplay>
            </SkillCategory>
        </>
    );
}
