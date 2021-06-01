import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import Context from "./Context";

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
          <Context.Consumer>
            {({ isAuth }) =>
              isAuth ? (
                <>
                  <Route exact path="/favs" component={Favs} />
                  <Route exact path="/user" component={User} />
                </>
              ) : (
                <>
                  <Route exact path="/favs" component={NotRegisteredUser} />
                  <Route exact path="/user" component={NotRegisteredUser} />
                </>
              )
            }
          </Context.Consumer>
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export default App;
