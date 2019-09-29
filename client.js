// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  
  const world_location = r360.getDefaultLocation()

  document.onkeydown = function(e) {
    const [x, y, z] = world_location.worldPosition
    let xx = x, yy = y, zz = z;
    const speed = 1
    switch (e.keyCode) {
        case 37:
            xx -= speed
            break;
        case 38:
            yy += speed
            break;
        case 39:
            xx += speed
            break;
        case 40:
            yy -= speed
            break;
    }
    console.log("New Position", [xx, yy, zz])
    world_location.setWorldPosition(xx, yy, zz);
}; 

  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot('Hello360', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );


  r360.renderToLocation(
    r360.createRoot("Hello360"),
    world_location
  )

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('skybox.jpg'));

  // r360._cameraPosition = [100, 100, 0];
}

window.React360 = {init};
