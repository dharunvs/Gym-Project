import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import useAuth from "./hooks/useAuth";
import useResolved from "./hooks/useResolved";
import "./styles/App.css";

function App() {
  const history = useHistory();
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? "/" : "login");
    }
  }, [authResolved, authUser, history]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
