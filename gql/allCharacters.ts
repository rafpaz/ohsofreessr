import gql from "graphql-tag";

export const ALL_CHARACTERS = gql`
  query allCharacters {
    allProduct {
      _id
      title
    }
  }
`;
