import ListItem from "./ListItem";
import { useQuery } from "@apollo/client";
import { GET_PENGUNJUNG } from "../graphql/Query";

const ListPassenger = (props) => {
  const { loading, error, data } = useQuery(GET_PENGUNJUNG);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.pengunjung.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
