import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./home/home";
import ClickerParent from "./Clicker/clicker-parent";

const App = () => {
  return (
    <div className="App">
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/clicker">
          <ClickerParent />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
