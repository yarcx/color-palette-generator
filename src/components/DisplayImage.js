import React from "react";
import ListItem from "./ListItem";
import { toHex } from "../helpers/convertColor";

const DisplayImage = ({ uploadedImage, colorPalette }) => {
  return (
    <div className='imgContent'>
      <div className='image'>
        {uploadedImage ? <img src={uploadedImage} alt='uploaded' /> : <p>Put an Image here...</p>}
      </div>

      {colorPalette && (
        <ul className='colorList'>
          {colorPalette.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = "#" + toHex(color[0]) + toHex(color[1]) + toHex(color[2]);
            return <ListItem rgb={rgb} hex={hex} key={index} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default DisplayImage;
