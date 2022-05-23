import { useMutation } from "@apollo/client";
import { useState } from "react";
import { INSERT_PENGUNJUNG_BY_ID } from "../graphql/Mutation";
import { GET_PENGUNJUNG } from "../graphql/Query";
import "./Home.css";

function PassengerInput() {
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jeniskelamin: "Pria",
    editing: true,
  });

  const [insertPengunjung, { loading }] = useMutation(INSERT_PENGUNJUNG_BY_ID, {
    refetchQueries: [GET_PENGUNJUNG],
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jeniskelamin) {
      const umur = state.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        insertPengunjung({
          variables: {
            object: {
              nama: state.nama,
              umur: state.umur,
              jeniskelamin: state.jeniskelamin,
            },
          },
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={state.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jeniskelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  );
}

export default PassengerInput;
