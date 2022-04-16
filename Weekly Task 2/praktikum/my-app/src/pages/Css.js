import React from "react";
import pic from "./Assest img/Css/1.PNG";
import pic2 from "./Assest img/Css/2.PNG";

function Css() {
  return (
    <div className="Css">
      <h1>CSS</h1>
      <p>
        Pada task ini disuruh untuk mengubah tampilan dari file html yang telah
        diberikan. task pertama ini saya memakai CSS Internal dikarenakan tidak
        banyak tampilan yang perlu saya gunakan.
      </p>
      <img src={pic} />
      <img src={pic2} />
    </div>
  );
}

export default Css;
