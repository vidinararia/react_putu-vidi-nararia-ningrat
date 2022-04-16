import React from "react";
import Pic from "./Assest img/Html/1.PNG";
import Pic2 from "./Assest img/Html/2.PNG";
import Pic3 from "./Assest img/Html/3.PNG";

function Html() {
  return (
    <div className="Html">
      <h1>HTML</h1>
      <p>
        Pada task ini telah terbuat sebuah 3 file html untuk membuat form sign
        up, dapat dilihat pada gambar dibawah ini.
      </p>
      <img src={Pic} />
      <img src={Pic2} />
      <img src={Pic3} />
    </div>
  );
}

export default Html;
