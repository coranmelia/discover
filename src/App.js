import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import ResearchProblem from "./containers/ResearchPage/ResearchProblem";
import ResearchExp from "./containers/ResearchPage/ResearchPhase/ResearchExp";
import ResearchGen from "./containers/ResearchPage/ResearchPhase/ResearchGen";
import ResearchEval from "./containers/ResearchPage/ResearchPhase/ResearchEval";
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
                            <ResearchProblem />
                        </Route>
                        <Route exact path={appRoutes.exploratory}>
                            <ResearchExp />
                        </Route>
                        <Route exact path={appRoutes.generative}>
                            <ResearchGen />
                        </Route>
                        <Route exact path={appRoutes.evaluative}>
                            <ResearchEval />
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
