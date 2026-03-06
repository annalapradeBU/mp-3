
// import components
import Header from "../components/Header.tsx";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";

import Education from "../components/mains/Education";
import Experiences from "../components/mains/Experiences";
import Extras from "../components/mains/Extras";
import Skills from "../components/mains/Skills";
import Projects from "../components/mains/Projects";
import Home from "../components/mains/Home.tsx";


// import routing stuff 
import {createBrowserRouter, Route, Routes, RouterProvider} from "react-router"


// import styled to use the css styling for components 
import styled from "styled-components";



// Page Wrapper 
// media queires inside, couldn't figure out how to do a global one
const StyledPageWrapper = styled.div`
    width: 85vw;
    background-color: #EEEEEE;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    overflow: hidden;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        width: 90vw; 
    }

    @media screen and (max-width: 750px) {
        width: 95vw; 
    }
`;

// general container 
const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

// main styles
const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    width: 80%;
    background-color: #EEEEEE; 

    @media screen and (max-width: 1000px) {
        width: 70%; 
        max-width: 70%;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        max-width: 100%;
    }
`;



// route the main components
function Root(){
  return(
    <StyledPageWrapper>
      <Header/>
      <StyledContainer>
        <Nav/>
        <StyledMain>
            <Routes>
          <Route
          path={'/'}
          element={<Home/>}
          />

          <Route 
          path="/education/education.html" 
          element={<Education />}
          />

          <Route
          path={'/experience'}
          element={<Experiences/>}
          />

          <Route
          path={'/projects'}
          element={<Projects/>}
          />

          <Route
          path={'/skills'}
          element={<Skills/>}
          />

          <Route
          path={'/extras'}
          element={<Extras/>}
          />

          

        </Routes>
        </StyledMain>
      </StyledContainer>
      <Footer/>
    </StyledPageWrapper>


  )
}

const router=createBrowserRouter(
  [{path:"*", Component:Root}]

);


export default function App() {
  return(
      <>   
      <RouterProvider router={router}/>
      </>
  )
}


