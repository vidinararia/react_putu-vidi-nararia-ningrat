import React from "react";
import pic from "./Assest img/Git/Git.PNG";

function Git() {
  return (
    <div className="Git">
      <h1>Git</h1>
      <p>
        Pada task ini telah terbuat sebuah repositori git dengan didalam reponya
        ada 4 branch yaitu ada branch master, develop, featureA, dan featureB.
        Hasilnya dapat dilihat pada gambar dibawah ini.
      </p>
      <img src={pic} />
    </div>
  );
}

export default Git;
