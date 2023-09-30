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
opacity: 0.6;
`

const NavBarBlank = styled.div`
border: 2px solid whitesmoke;
height: 3em;
`
const NavBarSubHeadStyle = styled.h4`
position: relative;
padding: 1.5em;
font-size: 1.2em;
color: white;
/* border: 1px solid white; */
background: linear-gradient()
opacity: 0.6;
`

const HeaderStyle = styled.div`
font-size: 3em;
font-weight: 10em;
padding-left: 2em;
padding-right: 2em;
/* padding-top: 0.5em; */
/* padding-bottom: 0.5em; */
`

const MainContainer = () => {
    return ( 
        <>
        <Routes>
            {/* Nested Elements? */}
            <Route path='/local' element={< Local />}/> {/*Local Forecast Component Route? */}
            <Route/>
            <Route/>
        </Routes>
        {/* 
        -------------------- These need to dissapear when loca page is rendered
        */}
        <NestedElements>
         <Link to="/local"><NavBarSubHeadStyle>Local Forecast</NavBarSubHeadStyle></Link>
          <NavBarBlank></NavBarBlank>
              <NavBarStyle> 
                  <div><HeaderStyle>Cirrus</HeaderStyle></div>
                  <div><h3>Your Local Weather</h3></div>
              </NavBarStyle>
            <NavBarBlank></NavBarBlank>
            <div><NavBarSubHeadStyle>Future Forecast</NavBarSubHeadStyle></div>
        </NestedElements>
        </>
     );
}
 
export default MainContainer;