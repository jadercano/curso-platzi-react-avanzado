import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Logo />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet/:id" component={Home} />
          <Route exact path="/detail/:detailId" component={Detail} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export default App;
