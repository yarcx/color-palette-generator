import { useState } from "react";
import "./App.css";
import DisplayImage from "./components/DisplayImage";
import ColorThief from "colorthief";

const gallery = <i className='fas fa-images'></i>;

function App() {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = async () => {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 6);
        setColorPalette(palette);
        setUploadedImg(event.target.result);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className='App'>
      <header>
        <h1>Palette Gen</h1>

        <div className='input'>
          <label htmlFor='file'>{gallery} Upload Image</label>
          <input type='file' id='file' hidden onChange={(e) => handleUploadImage(e)} />
        </div>
      </header>

      <main className='main'>
        <DisplayImage uploadedImage={uploadedImg} colorPalette={colorPalette} />
      </main>
    </section>
  );
}

export default App;
