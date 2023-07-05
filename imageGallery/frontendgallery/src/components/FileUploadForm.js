import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { getCookie } from "../getCookie";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";
const CSRFTOKEN = getCookie("csrftoken");

const FileUploadForm = ({ gallery, onFormSubmit }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("galleryID", gallery);

        // eslint-disable-next-line no-unused-vars
        const response = await axios.post(BASE_URL + "images/", formData, {
          headers: {
            "X-CSRFToken": CSRFTOKEN,
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    setSelectedFile(null);
    onFormSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <MDBRow>
        <MDBCol size={8}>
          <input
            type="file"
            className="form-control"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileInputChange}
          />
        </MDBCol>
        <MDBCol>
          <MDBBtn type="submit">Upload</MDBBtn>
        </MDBCol>
      </MDBRow>
    </form>
  );
};

export default FileUploadForm;
