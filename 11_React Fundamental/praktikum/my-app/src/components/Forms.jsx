import React, { useRef, useState } from "react";

function Forms() {
  const formsData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const [data, setData] = useState(formsData);
  const suratKesungguhan = useRef(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errorAvaliable, setErrorAvaliable] = useState(false);

  const textOnlyRegex = /^[A-Za-z]*$/;

  const handleReset = () => {
    setData(formsData);
    setErrorMessage([]);
    setErrorAvaliable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage([]);
    if (suratKesungguhan.current.files[0] === "") {
      setErrorMessage([...errorMessage, { error: "surat kesungguhan kosong" }]);
    }
    if (!textOnlyRegex.test(data.nama)) {
      setErrorMessage([
        ...errorMessage,
        { error: "Nama Lengkap Harus Berupa Hurup" },
      ]);
    }
    if (errorMessage.length < 1) {
      alert('data Pendaftar "' + data.nama + '" Berhasil Diterima');
    } else {
      setErrorAvaliable(true);
      console.log(errorMessage);
      alert("data Pendaftar Tidak Sesuai");
    }
    console.log(data);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Nama Lengkap:</label>
            <input
              type="text"
              className="form-control"
              name="nama"
              aria-describedby="emailHelp"
              value={data.nama}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              value={data.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              No Handphone
            </label>
            <input
              type="text"
              minLength="9"
              maxLength="14"
              className="form-control"
              name="noHandphone"
              value={data.noHandphone}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <p>Latar Belakang Pendidikan : </p>
          <div className="d-inline-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pendidikan"
                value="IT"
                onChange={(e) => handleChange(e)}
                required
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                IT
              </label>
            </div>
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="pendidikan"
                value="Non IT"
                onChange={(e) => handleChange(e)}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Non IT
              </label>
            </div>
          </div>
          <p className="mt-3">Kelas Coding yang dipilih :</p>
          <select
            className="form-select"
            aria-label="Default select example"
            name="kelas"
            onChange={(e) => handleChange(e)}
            alue="blank"
            required
          >
            <option>Pilih Salah Satu Program</option>
            <option value="Coding Backend with Golang">
              Coding Backend with Golang
            </option>
            <option value="Coding Frontend with ReactJS">
              Coding Frontend with ReactJS
            </option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
          <div className="my-3">
            <p>Foto surat kesungguhan :</p>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              ref={suratKesungguhan}
              accept="image/*"
              required
            />
          </div>
          <div className="mb-3">
            <label>Harapan Untuk Coding Bootcamp ini :</label>
            <textarea
              className="form-control"
              name="harapan"
              rows="3"
              value={data.harapan}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <ul>
            {errorMessage.map((item, i) => (
              <li key={i}>{item.error} </li>
            ))}{" "}
          </ul>
          <button type="submit" className="btn btn-success mt-3 px-4">
            Submit
          </button>
          <button
            className="btn btn-danger mt-3 mx-3 px-4"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
