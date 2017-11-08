import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";

const App = () => (
  // root router for entire app
  <BrowserRouter>
    <div className="container">
      <Header />
      {/*Switch will look for a matching route*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title="About" />} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        {/*not found*/}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;