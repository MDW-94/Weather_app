import React from 'react'

import styled from "styled-components"
import cloud_1 from './images/cloud_1.png'


const BackgroundImageStyle = styled.img`
background-size: cover;
background-repeat: no-repeat;
min-height: 100%;
min-width: 100%;
width: 1000px;
height: auto;
/* height: 100vh; */
/* display: flex; */
position: fixed;
overflow: hidden;
`

const BackgroundImage = () => {

    return ( 
        <>
        <BackgroundImageStyle src={cloud_1}/>
        </>
     );
}
 
export default BackgroundImage;




// API of cloud photos that changes depending on system time (day)
