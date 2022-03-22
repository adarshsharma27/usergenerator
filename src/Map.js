import {useEffect } from "react";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9ob3Y5OTQ3NSIsImEiOiJja3ZjNXVrcWIyc2prMnJsdTUzNjl1a2hjIn0.wWIW00DV5QwcG8SC4mik9Q';

const Map = ({lng,lat,country}) => {
    console.log(lng,lat);
let map;
useEffect(() => {
  map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng,lat],
      zoom: 5

    });
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    addCoord(map)
},[lng,lat]);

const popup = new mapboxgl.Popup({
          offset: 25
        }).setHTML(
          `${country}`
        );

const addCoord=()=>{
    new mapboxgl.Marker({
         draggable: false,
         color: '#7E22CE'
       }).setLngLat([lng,lat]).setPopup(popup).addTo(map);
    
}

  return (
       <section className="container w-full h-3/6 px-5 lg:px-10 ">
            <div id="map" className="h-screen"></div>
        </section>
  );
};

export default Map;
