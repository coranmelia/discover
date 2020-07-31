import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import Problem from "./containers/Process/Phases/Problem";
import Exploratory from "./containers/Process/Phases/Exploratory";
import Generative from "./containers/Process/Phases/Generative";
import NeedValidation from "./containers/Process/Phases/NeedValidation";
import MVP from "./containers/Process/Phases/MVP";
import AboutUs from "./containers/AboutUs/AboutUs";
import Solution from "./containers/Solution/Solution";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar />

                <div className="MainContent">
                    <Switch>
                        <Route exact path={appRoutes.home}>
                            <HomePage />
                        </Route>
                        <Route exact path={appRoutes.problem}>
                            <Problem />
                        </Route>
                        <Route exact path={appRoutes.exploratory}>
                            <Exploratory />
                        </Route>
                        <Route exact path={appRoutes.generative}>
                            <Generative />
                        </Route>
                        <Route exact path={appRoutes.need}>
                            <NeedValidation />
                        </Route>
                        <Route exact path={appRoutes.mvp}>
                            <MVP />
                        </Route>
                        <Route exact path={appRoutes.solution}>
                            <Solution/>
                        </Route>
                        <Route exact path={appRoutes.about}>
                            <AboutUs />
                        </Route>
                        <Redirect to={appRoutes.home} />
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }

};

export default App;
