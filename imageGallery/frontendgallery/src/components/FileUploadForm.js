import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { getCookie } from '../getCookie';
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";
const CSRFTOKEN = getCookie("csrftoken");

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (selectedFile) {
        let success
        try {
            const response = await axios.post(BASE_URL + "images/", selectedFile, {
              headers: {
                "X-CSRFToken": CSRFTOKEN,
                "Content-Type": "application/json",
              },
            });
            success = response.data;
          } catch (error) {
            console.log(error);
          }
          if (success) {
            //setShowUploadSuccess(true);
          } else {
            //setShowUploadFail(true);
          }
    }

    setSelectedFile(null);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <MDBRow>
        <MDBCol size="8">
          <input
            type="file"
            class="form-control"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileInputChange}
          />
        </MDBCol>
        <MDBCol size="4">
          <MDBBtn type="submit">Upload</MDBBtn>
        </MDBCol>
      </MDBRow>
    </form>
  );
};

export default FileUploadForm;
