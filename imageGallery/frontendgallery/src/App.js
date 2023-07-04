import "./App.css";
import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Gallery from "./components/Gallery";
import FileUploadForm from "./components/FileUploadForm";

const BASE_URL = "http://127.0.0.1:8000/";

function App() {
  const [galleries, setGalleries] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState('');
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        let response = await fetch(BASE_URL + "galleries/");
        let data = await response.json();
        setGalleries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGalleries();
    setUpdate(null);
  }, [update]);

  const handleGalleryChange = (event) => {
    setSelectedGallery(event.target.value);
  };

  const refreshGallery = () => {
    setUpdate(true);
  }

  return (
    <div className="main d-flex flex-column align-items-center justify-content-center">
      <div className="mt-4">
        <MDBRow className="d-flex justify-content-center" size="4">
          <MDBCol  className="d-flex justify-content-center" size={4}>
            <select
            value={selectedGallery}
            onChange={handleGalleryChange}
          >
            <option value="" disabled>
              -- Select a gallery --
            </option>
            {galleries.map((gallery) => (
              <option key={gallery.id} value={gallery.id}>
                {gallery.name}
              </option>
            ))}
          </select>
          </MDBCol>
          <MDBCol size={8}>
            <FileUploadForm gallery={selectedGallery} onFormSubmit={refreshGallery}/>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="d-flex align-self-center mt-4 w-75 h-75">
        <Gallery images={galleries} />
      </div>
    </div>
  );
}

export default App;
