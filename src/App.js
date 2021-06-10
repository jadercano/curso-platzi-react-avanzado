import React, { Suspense, useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));

const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Logo />
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet/:id" component={Home} />
          <Route exact path="/detail/:detailId" component={Detail} />
          {!isAuth && (
            <Route exact path="/login" component={NotRegisteredUser} />
          )}
          {!isAuth && <Redirect from="/favs" to="/login" />}
          {!isAuth && <Redirect from="/user" to="/login" />}
          {isAuth && <Redirect from="/login" to="/" />}
          <Route exact path="/favs" component={Favs} />
          <Route exact path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
