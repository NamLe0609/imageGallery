import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);
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
