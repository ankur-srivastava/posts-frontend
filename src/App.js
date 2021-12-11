import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles.css";
import Header from "./Header";
import Feed from "./Feed";
import Footer from "./Footer";
import Login from "../src/components/Login/Login";

// Tutorial
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

// Header
// Main
// Side
// Footer

// Commenting for Tutorial Work
// export default function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Feed />
//       <Footer />
//     </div>
//   );
// }

export default function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
