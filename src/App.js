import React from "react";
import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import Time from "./component/Time";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
// import Daymove from "./component/Daymove";
// import Mainpage from "./component/Mainpage";
// import Mainpage from "./component/Mainpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Time />
          <Switch>
            <Route exact path="/">
              <DayList />
            </Route>
            <Route path="/day/:day">
              <Day />
              {/* <Daymove /> */}
            </Route>
            <Route path="/create_word">
              <CreateWord />
            </Route>
            <Route path="/create_day">
              <CreateDay />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
