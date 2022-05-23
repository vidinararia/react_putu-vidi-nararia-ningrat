import { gql } from "@apollo/client";

export const DELETE_PENGUNJUNG_BY_ID = gql`
  mutation MyMutation($id: Int!) {
    delete_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_PENGUNJUNG_BY_ID = gql`
  mutation MyMutation($object: pengunjung_insert_input!) {
    insert_pengunjung_one(object: $object) {
      id
    }
  }
`;
