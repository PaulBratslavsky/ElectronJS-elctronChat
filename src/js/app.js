import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import MainView from "./views/main.view";
import Login from "./views/login.view";
import Register from "./views/register.view";
import Settings from "./views/setting.view";
import NavBar from "./components/NavBar";

export default function App() {
  const handleSendNotification = () => preload.alertApi.sendAlert("It worked");
  const history = useHistory();

  useEffect(() => {
    !isAuthenticated ? history.push("/login") : history.push("/");
  }, [isAuthenticated]);

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  console.log(isAuthenticated);
  return (
    <div className="content-wrapper">
      {isAuthenticated && (
        <NavBar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}

      <div className="view-area">
        <Switch>
          <Route path="/" exact>
            <MainView />;
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

/* 
<div className="content-wrapper">
      <NavBar handleSendNotification={handleSendNotification} />
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          
        </div>
        <div className="col-9 fh">
          
        </div>
      </div>
    </div>


*/
