import ListItem from "./ListItem";
import { useQuery } from "@apollo/client";
import { GET_PENGUNJUNG } from "../graphql/Query";
import { useMutation } from "@apollo/client";
import { DELETE_PENGUNJUNG_BY_ID } from "../graphql/Mutation";

const ListPassenger = () => {
  const { loading, error, data } = useQuery(GET_PENGUNJUNG);
  const [deletePengunjung, { loading: loadingDelete }] = useMutation(
    DELETE_PENGUNJUNG_BY_ID,
    { refetchQueries: [GET_PENGUNJUNG] }
  );

  const hapusPengunjung = (id) => {
    deletePengunjung({
      variables: {
        id: id,
      },
    });
  };

  if (loading || loadingDelete) {
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
            hapusPengunjung={hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
