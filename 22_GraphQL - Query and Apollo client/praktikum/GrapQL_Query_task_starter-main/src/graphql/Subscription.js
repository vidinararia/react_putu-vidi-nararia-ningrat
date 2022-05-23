import { gql } from "@apollo/client";

export const SUBSCRIPTION_PENGUNJUNG = gql`
  subscription MySubscription {
    pengunjung {
      id
      jeniskelamin
      nama
      umur
    }
  }
`;
