import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'

import Local from '../components/local';

import styled from 'styled-components';

const NestedElements = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: auto;
width: auto;
margin-top: 12%;
/* margin-left: 15em; */
margin-left: 50%;
/* margin-right: 15em; */
margin-right: 50%;
margin-bottom: 3%;
/* border: 2px solid white; */
/* position: absolute */
`

const NavBarStyle = styled.div`
color: whitesmoke;
position: relative;
padding: 1em;
width: auto;
height: auto;
/* border: 2px solid whitesmoke; */
/* background: salmon; */
/* background: lightcoral; */
background: linear-gradient(grey, salmon);
border-radius: 70px;
opacity: 0.6;
`

const NavBarBlank = styled.div`
border: 2px solid whitesmoke;
height: 3em;
`
const NavBarSubHeadStyle = styled.h4`
position: relative;
padding: 1.5em;
font-size: 1.25em;
color: salmon;
border-radius: 50px;
/* border: 1px solid white; */
&:hover{
    opacity: 0.6;
    color: black;
    font-size: 1.6em;
    transition: 3s;
}
transition: 5s;
`

const HeaderStyle = styled.div`
font-size: 3em;
font-weight: 800;
padding-left: 2em;
padding-right: 2em;
/* padding-top: 0.5em; */
/* padding-bottom: 0.5em; */
`

const HomeLinkStyle = styled(Link)`
color: whitesmoke;
text-decoration: none;
&:hover{
    opacity: 0.4;
    color: black;
    font-size: 1.5em;
    transition: 3.5s;
}
transition: 3s;
`

const RouteLinkStyle = styled(Link)`
color: orange;
text-decoration: none;
font-size: 1.2em;
font-weight: 500;
/* &:hover{
    opacity: 1;
    font-size: 1.5em;
    transition: 3.5s;
}
transition: 3s; */
`

const MainContainer = () => {
    return ( 
        <>
        <Routes>
            {/* Nested Elements? */}
            <Route path='/local' element={< Local />}/> {/*Local Forecast Component Route? */}
            <Route path='/future'/>
            <Route/>
        </Routes>
        {/* 
        -------------------- These need to dissapear when loca page is rendered
        */}
        <NestedElements>
         <RouteLinkStyle to="/local"><NavBarSubHeadStyle>Local Forecast</NavBarSubHeadStyle></RouteLinkStyle>
          <NavBarBlank></NavBarBlank>
              <NavBarStyle> 
                  <div><HeaderStyle><HomeLinkStyle to='/'>Cirrus</HomeLinkStyle></HeaderStyle></div>
                  <div><h3>Your Local Weather</h3></div>
              </NavBarStyle>
            <NavBarBlank></NavBarBlank>
            <RouteLinkStyle to="/future"><NavBarSubHeadStyle>Future Forecast</NavBarSubHeadStyle></RouteLinkStyle>
        </NestedElements>
        </>
     );
}
 
export default MainContainer;