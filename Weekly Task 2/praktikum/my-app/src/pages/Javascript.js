import React from "react";
import Pic from "./Assest img/Javascript/no1.PNG";
import Pic3 from "./Assest img/Javascript/no3.PNG";
import Pic4 from "./Assest img/Javascript/no4.PNG";
import Pic5 from "./Assest img/Javascript/no5.PNG";
import Pic6 from "./Assest img/Javascript/no6.PNG";

function Javascript() {
  return (
    <div className="Javascript">
      <h1>Javascript Refresment</h1>
      <p>
        pada task ini terdapat 6 soal pada soal no 1 disuruh untuk memperbaiki
        code javascript yang diberikan dan soal no 2 disuruh untuk menjelaskan
        kenapa code pada no 1 tidak bisa running. Dan soal no 3 sampai 6 kita
        disuruh untuk membuat code yang outputnya sudah ditentukan pada soal.
      </p>
      <img src={Pic} />
      <img src={Pic3} />
      <img src={Pic4} />
      <img src={Pic5} />
      <img src={Pic6} />
    </div>
  );
}

export default Javascript;
