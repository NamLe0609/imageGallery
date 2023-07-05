import React from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const Gallery = ({ className, images }) => {
  
  return (
    <MDBRow className={className}>
      {images.length > 0 ? (
        images.map((image) => (
          <MDBCol key={image.id} lg={4} className="mb-4 mb-lg-0">
            <img
              src={`http://127.0.0.1:8000${image.image}`}
              alt=""
              className="w-100 shadow-1-strong rounded mb-4"
            />
          </MDBCol>
        ))
      ) : (
        <p>No images available.</p>
      )}
    </MDBRow>
  );
};

export default Gallery;
