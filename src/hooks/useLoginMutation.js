import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [loginMutation, { data, error, loading }] = useMutation(LOGIN);

  const loginUser = (email, password) => {
    const input = { email, password };
    const variables = { input };
    return loginMutation({ variables });
  };

  return { loginUser, data, error, loading };
};
