import React from "react";
import Pic from "./Assest img/Bootstrap/1.PNG";
import Pic2 from "./Assest img/Bootstrap/2.PNG";
import Pic3 from "./Assest img/Bootstrap/3.PNG";

function Bootstrap() {
  return (
    <div className="Bootstrap">
      <h1>Bootstrap</h1>
      <p>
        pada bagian awal ini disuruh untuk membuat navbar dengan bootstrap.
        Berikut merupakan file dan hasilnya.
      </p>
      <img src={Pic} />
      <img src={Pic2} />
      <img src={Pic3} />
    </div>
  );
}

export default Bootstrap;
