import gql from "graphql-tag";

export const ALL_PRODUCTS = gql`
  query allProducts {
    allProduct {
      _id
      title
    }
  }
`;
