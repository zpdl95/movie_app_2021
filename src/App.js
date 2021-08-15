import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";

/* Route에서 exact속성은 path에 들어있는 주소가 정확하게 같을때만 작동하도록 설정하는 것 */

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
