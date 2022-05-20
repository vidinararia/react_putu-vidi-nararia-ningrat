import { gql } from "@apollo/client";

export const GET_PENGUNJUNG = gql`
  query MyQuery {
    pengunjung {
      id
      nama
      umur
      jeniskelamin
    }
  }
`;
