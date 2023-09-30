import React from "react";

import styled from "styled-components";

const TextStyle = styled.p`
position: relative;
font-size: x-large;
`

// document.getElementsByTagName("h1")[0].style.fontSize = "6vw"; I THINK THIS BRINGS IN THE MAP HTML DOCUMENT

const Local = () => {
    return ( 
        <>
            <TextStyle>Hi I'm the Local Page</TextStyle>
            <script src="https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js"></script>

            <script src="https://unpkg.com/esri-leaflet-heatmap@2.0.0"></script>
            <div id="map"></div>
            <script></script>
        </>
     );
}
 
export default Local;

{/* <NestedElements>
<Link to="/local"><NavBarSubHeadStyle>Local Forecast</NavBarSubHeadStyle></Link>
 <NavBarBlank></NavBarBlank>
     <NavBarStyle> 
         <div><HeaderStyle>Cirrus</HeaderStyle></div>
         <div><h3>Your Local Weather</h3></div>
     </NavBarStyle>
   <NavBarBlank></NavBarBlank>
   <div><NavBarSubHeadStyle>Future Forecast</NavBarSubHeadStyle></div>
</NestedElements> */}




// const map = L.map("map", { maxZoom: 16}).setView([57, -4], 5);

// var Stadia_Outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {
// 	minZoom: 0,
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	ext: 'png'
// }).addTo(map);

//       // new constructor syntax at 2.0.0
//       L.esri.Heat.featureLayer({
//         url: "https://services1.arcgis.com/6677msI40mnLuuLr/arcgis/rest/services/PointsofRelaxing/FeatureServer/0",
//         radius: 10,
//         minOpacity:10
//       }).addTo(map);