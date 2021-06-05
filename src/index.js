import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import Context from "./Context";

const httpLink = createHttpLink({
  uri: "http://localhost:3500/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token");
  const authorization = token ? `Bearer ${token}` : "";

  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});

const onErrorLink = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location.href = "/";
  }
});

const client = new ApolloClient({
  link: from([onErrorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
