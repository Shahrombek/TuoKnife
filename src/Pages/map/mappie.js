import ReactMapGl from "react-map-gl";
import { useState } from "react";
import { Marker } from "react-map-gl";
import { FaApple } from "react-icons/fa";

function Mappie() {
  const [viewport, setViewport] = useState({
    latitude: 41.3299592,
    longitude: 69.2844378,
    width: "50vw",
    height: "50vh",
    borderRadius: "25px",
    outline: "none",
    zoom: 10,
  });
  const [viewpoint, setViewpoint] = useState([]);

  return (
    <div className="App">
      <div className="map">
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiaXNsb21qb24iLCJhIjoiY2t6NmhkYW1hMGJ3cDJvczhxem52cW44aiJ9.jG3OE2FyEnD4U11CXe_MiA"
          mapStyle={"mapbox://styles/mapbox/dark-v10"}
          onViewportChange={(viewport) => setViewport(viewport)}
          onDblClick={(e) => {
            // console.log(e.lngLat);
            const obj = {
              latitude: e.lngLat[1],
              longitude: e.lngLat[0],
            };
            viewpoint.push(obj);
            console.log(viewpoint);
          }}
        >
          <div>
            {viewpoint.map((item) => {
              return (
                <Marker latitude={item.latitude} longitude={item.longitude}>
                  <FaApple className="icon" />
                </Marker>
              );
            })}
          </div>
        </ReactMapGl>
      </div>
    </div>
  );
}

export default Mappie;
