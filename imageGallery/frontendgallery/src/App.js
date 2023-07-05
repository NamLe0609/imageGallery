import "./App.css";
import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Gallery from "./components/Gallery";
import FileUploadForm from "./components/FileUploadForm";

const BASE_URL = "http://127.0.0.1:8000/";

function App() {
  const [galleries, setGalleries] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState("");
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    fetchGalleries();
    setUpdate(null);
  }, [update]);

  const fetchGalleries = async () => {
    try {
      let response = await fetch(BASE_URL + "galleries/");
      let data = await response.json();
      setGalleries(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGalleryChange = (event) => {
    const parsedGallery = JSON.parse(event.target.value);
    setSelectedGallery(parsedGallery);
  };

  const refreshGalleryList = () => {
    setUpdate(true);
  };

  const refreshGallery = async () => {
    try {
      let response = await fetch(BASE_URL + `galleries/${selectedGallery.id}`);
      let data = await response.json();
      setSelectedGallery(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main d-flex flex-column align-items-center justify-content-center">
      <div className="mt-4">
        <MDBRow className="d-flex justify-content-center" size="4">
          <MDBCol className="d-flex justify-content-center" size={4}>
            <select value={selectedGallery} onChange={handleGalleryChange}>
              <option value="">
                -- Select a gallery --
              </option>
              {galleries.map((gallery) => (
                <option key={gallery.id} value={JSON.stringify(gallery)}>
                  {gallery.name}
                </option>
              ))}
            </select>
          </MDBCol>
          <MDBCol size={8}>
            {selectedGallery && (
              <FileUploadForm
                gallery={selectedGallery.id}
                onFormSubmit={refreshGallery}
              />
            )}
          </MDBCol>
        </MDBRow>
      </div>
      <div className="d-flex align-self-center mt-4 w-75 h-75">
        {selectedGallery && <Gallery images={selectedGallery.images} />}
      </div>
    </div>
  );
}

export default App;
