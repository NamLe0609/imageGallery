import React from "react";
import {
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

const Gallery = ({ className, images }) => {
  return (
    <MDBRow className={className}>
      {images.map((image) => (
        <MDBCol key={image.id} lg={4} className='mb-4 mb-lg-0'>
          <img src={image.url} alt="" className='w-100 shadow-1-strong rounded mb-4'/>
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default Gallery;
