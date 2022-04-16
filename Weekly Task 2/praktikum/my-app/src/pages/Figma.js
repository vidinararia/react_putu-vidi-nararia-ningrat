import React from "react";
import pic from "./Assest img/Figma/Figma.PNG";

function Figma() {
  return (
    <div className="Figma">
      <h1>Figma</h1>
      <p>
        Pada task ini telah terbuat sebuah prototype ui ux yang merupakan dari
        pembelajaran materi Figma. Prototypenya dapat dilihat pada gambar
        dibawah ini.
      </p>
      <img src={pic} />
    </div>
  );
}

export default Figma;
