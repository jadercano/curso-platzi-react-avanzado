import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Context from "./Context";

const client = new ApolloClient({
  uri: "http://localhost:3500/graphql",
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
