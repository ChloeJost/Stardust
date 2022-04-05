import React from 'react';

const SkyMap = () => (
  <div>
    <h1>Sky Map</h1>
    <iframe
      className="sky-map" 
      width="800" 
      height="800" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0" 
      src="https://virtualsky.lco.global/embed/index.html?longitude=-119.86286000000001&latitude=34.4326&projection=polar&constellations=true&constellationlabels=true&showstarlabels=true&az=192.84525109280014" 
      allowTransparency="true">
    </iframe>
  </div>
);

export default SkyMap;
