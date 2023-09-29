import React from 'react';
import styled from 'styled-components';
import './App.css';
import BackgroundImage from './background_image';

const NestedElements = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: auto;
width: auto;
margin-top: 7em;
margin-left: 15em;
margin-right: 15em;
margin-bottom: 17em;
border: 2px solid white;
/* position: absolute */
`

const NavBarStyle = styled.div`
color: whitesmoke;
position: relative;
padding: 1em;
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


function App() {
  return (
    <div className="App">
      <BackgroundImage/>
        <NestedElements>
         <div><NavBarSubHeadStyle>Local Forecast</NavBarSubHeadStyle></div>
          <NavBarBlank></NavBarBlank>
              <NavBarStyle> 
                  <div><HeaderStyle>Cirrus</HeaderStyle></div>
                  <div><h3>Your Local Weather</h3></div>
              </NavBarStyle>
            <NavBarBlank></NavBarBlank>
            <div><NavBarSubHeadStyle>Future Forecast</NavBarSubHeadStyle></div>
        </NestedElements>
    </div>
  );
}

export default App;


// MVP: Weather App that uses API to display local forecast
// EXT: Images change depending on the day - lots of CSS Styling

// Add a keyframes rotation on the linear gradient behind the title?