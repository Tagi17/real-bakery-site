// /// <reference types="@types/google.maps" />

// 'use client'

// import React, { useEffect } from "react";

// const GoogleMap = () => {
//   const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };
//   const position = { lat: -25.344, lng: 131.031 };
//   let map;
  
//   async function initMap(): Promise<void> {
   
//     const { Map } = await google.maps.importLibrary(
//       "maps"
//     ) as google.maps.MapsLibrary;

//     map = new Map(document.getElementById("map") as HTMLElement, {
//       center: center,
//       zoom: 8,
//       mapId: "process.env.NEXT_PUBLIC_DEMO_MAP_ID",
//     });
//     const { AdvancedMarkerElement } = (await google.maps.importLibrary(
//       "marker"
//     )) as google.maps.MarkerLibrary;

    
//     const marker = new AdvancedMarkerElement({
//       map: map,
//       position: position,
//       title: "Uluru",
//     });
//   }

//   initMap();
  
//   return (
//     <div>
//       <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
//       <script
//       dangerouslySetInnerHTML={{
//         __html: `
//           (g => {
//             var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;
//             b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));
//             e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);
//             e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;
//             d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";
//             m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
//               key: "process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY",
//               v: "weekly"
//             });
//           `,
//       }}
//     />
//       <div>
//       <div id="map" style={{ height: "100vh", width: "100%" }}></div>
//       </div>
//     </div>
//   )
// };

// export default GoogleMap;
