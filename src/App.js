import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IsLoading from "./components/IsLoading";

const MainList = React.lazy(() => import("./components/MainList"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const EditPeople = React.lazy(() => import("./components/EditPeople"));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<IsLoading />}>
          <Switch>
            <Route path="/" exact component={MainList} />
            <Route path="/edit" exact component={EditPeople} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
