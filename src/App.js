import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import City from "./Components/City/City";
import Home from "./Components/Home/Home";

function App() {
  const endpoint = "https://api.openaq.org/v2/cities?country=GB&limit=10000";
  const [cities, setCities] = useState(null);

  useEffect(() => {
    async function getCities() {
      const res = await fetch(endpoint);
      const data = await res.json();

      setCities(data);
    }
    getCities();
  }, []);

  return (
    <BrowserRouter>
      <main>
        <div className="App">
          <NavigationBar cities={cities} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/City/:cityName">
              <City />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
