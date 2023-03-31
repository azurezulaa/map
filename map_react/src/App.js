import "./App.css";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

function App() {
  const [branches, setBranches] = useState([]);
  const getAllBranchs = async () => {
    try {
      const result = await axios.get("http://localhost:9000/restaurants");
      setBranches(result.data.restaurants);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  const getNearBranch = async () => {
    try {
      const result = await axios.post(
        "http://localhost:9000/restaurants/near?distance=300",
        {
          lat: 47.92394060040875,
          lon: 106.93371541130081,
        }
      );
      setBranches(result.data.branches);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  return (
    <div className="App">
      <h1>MAP</h1>
      <button onClick={getAllBranchs}>buh salbariig haruulah</button>
      <button onClick={getNearBranch}>hamgiin oiriig haruulah</button>
      <div style={{ width: "100%", height: "90vh", backgroundColor: "grey" }}>
        <MapContainer
          style={{ width: "100%", height: "90vh" }}
          center={[47.92386968325628, 106.93441291973808]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.92394060040875, 106.93371541130081]}>
            <Popup>Seoul Business Center</Popup>
          </Marker>

          {branches.length > 0 &&
            branches.map((r) => (
              <Marker
                position={[
                  r.location.coordinates[1],
                  r.location.coordinates[0],
                ]}
              >
                <Popup>{r.name}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
