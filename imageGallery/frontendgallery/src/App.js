import "./App.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

import Gallery from "./components/Gallery";
import FileUploadForm from "./components/FileUploadForm";

function App() {
  const images = [
    { id: 1, url: image1, title: "Image 1" },
    { id: 2, url: image2, title: "Image 2" },
    { id: 3, url: image3, title: "Image 3" },
    { id: 4, url: image3, title: "Image 1" },
    { id: 5, url: image1, title: "Image 2" },
    { id: 6, url: image2, title: "Image 3" },
  ];

  return (
    <div className="main d-flex flex-column align-items-center justify-content-center">
      <div className="mt-4">
        <FileUploadForm/>
      </div>
      <div className="d-flex align-self-center mt-4 w-75 h-75">
        <Gallery images={images} />
      </div>
    </div>
  );
}

export default App;
