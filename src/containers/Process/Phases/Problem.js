import React, { Component } from "react";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import "../Research.scss";
import "./../Phases/ResearchPhase.scss";
import P1 from "../../../assets/imgs/3.png";
import PhotoZoom from "../../../components/PhotoZoom/PhotoZoom";
import ProgressBar from "../../../components/ProgressBar/ProgressBar"
import process from "../../../assets/problem/process.png";
import TooltipList from "../../../components/Tooltip/TooltipList";
import Tooltip from "../../../components/Tooltip/Tooltip";
class Problem extends Component {
  state = {
  };

  render() {
      const id = 1;
      const title = ResearchTitleList.filter(title => title.id === id)[0];
      const { name, photo } = title;

      return (
          <div className="research">
              <div className="BannerImage">
                  <img style={{ width: "100%" }} src={photo} alt={name} />
              </div>
              <div className="Banner container">
                  {/*<h5>DISCOVER X MHCI</h5>*/}
                  <div className="BannerTextContainer">
                      <h1 className="BannerText--light">{name}</h1>

                  </div>
              </div>
              <br/>
              <div className="container">
                  {/*<ResearchBar activeElement={id}></ResearchBar>*/}
                  <ProgressBar progress={0}/>
                  <div className="phase no-shadow">
                      <h4>Team Thoughts.</h4>
                      <span><h2>What did our design process look like to us?</h2></span>
                      <div className="row">
                          <div className="col-lg-6 col-md-12">
                              <p>
                                  In human-centered design, we talk a lot about about the “double diamond” design process (an iterative model of diverging & converging, first introduced by the British Design Council in 2005). But models are more of a guide than a rule. What actually happened?
                              </p>
                              <br/>
                              <h3 className={"tall-line"}>
                                  In case you did not notice, whenever a <span className={"tooltips"}> dotted underline <Tooltip content={TooltipList[16]}/></span> shows up, hover over / tap it to see our fun team memories!
                              </h3>
                          </div>
                            <div className="col-lg-1"></div>
                          <div className="col-lg-5 col-md-12">
                              <p><span className={"tooltips bold"}>Aaron <Tooltip content={TooltipList[2]}/></span> thinks...</p>
                              <br/>
                              <p><span className={"tooltips bold"}>Cora <Tooltip content={TooltipList[3]}/></span> thinks...</p>
                              <br/>
                              <p><span className={"tooltips bold"}>Jackie <Tooltip content={TooltipList[4]}/></span> thinks...</p>
                              <br/>
                              <p><span className={"tooltips bold"}>Bidisha <Tooltip content={TooltipList[5]}/></span> thinks...</p>
                              <br/>
                              <p><span className={"tooltips bold"}>Stacy <Tooltip content={TooltipList[6]}/></span> thinks...</p>
                          </div>
                      </div>
                  </div>
                  <div className="phase">
                      <span><h2>What problem are we solving?</h2></span>
                      <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                              <br/>
                              <PhotoZoom src={P1} alt="Bidi_and_Stacy"/>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                              <p>
                                  Student loans are a long-term investment that provide students with opportunities to achieve higher education that would otherwise be unattainable. But the student loan experience can be difficult to access in many senses — students and parents often run into issues and get frustrated by the tedious application process, loan options, repayment plans, and seemingly undifferentiated lenders.
                              </p>
                              <p>
                                  Lots of applicants are potentially constrained by limited financial literacy, lack of credit history, or lack of motivation, which prompt them to drop out of the application process and be unable to obtain the loan that is crucial for their education goal.
                              </p>
                              <p>
                                  So what causes people to drop out of the application? What prevents students from applying for a loan? We dug deeply into the problem space and uncovered overlooked customers and needs.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <article className="container-fluid bg-dark-green">
                  <div className="container">
                      <div className="phase">
                          <h4>Diverge. Converge. And repeat.</h4>
                          <span><h2>Our Process Overview</h2></span>
                          <div className="row justify-content-md-between justify-content-sm-center">
                              <div className="col-lg-3 col-md-5 col-sm-8 no-shadow">
                                  <img src={ process } alt={"process"}/>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12">
                                  <br/>
                                  <br/>
                                  <h3>
                                      UX Research
                                      <br/>
                                      Define the problem
                                  </h3>
                                  <p>
                                      The fundamentals of Human-Centered Design are to identify the right problem, to understand and prioritize human needs & limitations, and to build empathy, ideate, prototype, and iterate.
                                  </p>
                                  <p>
                                      In our UX research, we created 200+ sketches, storyboards, and research artifacts, and did more than 6 rounds of research, from guerrilla interviews to participatory design, to find out the right problem to solve.
                                  </p>
                                  <br/>
                                  <h3>
                                      UX Design
                                      <br/>
                                      Solve the problem
                                  </h3>
                                  <p>
                                      In our design process, we created dozens of design ideas and further sharpened some of them into testable prototypes.
                                  </p>
                                  <p>
                                      Through our 60+ user interview sessions, we found ones that underline real user needs and extracted the features to converge into 1 final design solution.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </article>
          </div>

    );
  }
}

export default Problem;
