import React, { Component } from "react";
import ResearchTitleList from "../../components/ResearchBar/PageList";
import "./Research.scss";
import "./ResearchPhase/ResearchPhase.scss";
import ResearchBar from "../../components/ResearchBar/ResearchBar";
import P1 from "../../assets/imgs/3.png";
import Model from "../../assets/imgs/model2.png";
import Cards from "../../components/Cards/Cards";
import PhotoZoom from "../../components/PhotoZoom/PhotoZoom";

class ResearchProblem extends Component {
  state = {
    // chars: CharList
  };

  render() {
    // let { chars } = this.state;
    // chars = sortBy(chars, ["rank"]);
      const id = 1;
      const title = ResearchTitleList.filter(title => title.id === id)[0];
      const { name, photo, keyLine } = title;


      return (
          <div className="research">
              <div className="BannerImage">
                  <img style={{ width: "100%" }} src={photo} alt={name} />
              </div>
              <div className="Banner">
                  <div className="BannerTextContainer">
                      <div className="BannerText ">{name}</div>
                      <div className="break"></div>
                  </div>
                  <div className="IntroContainer row">
                      <p className="IntroText">
                          {keyLine}
                      </p>
                  </div>
              </div>
              <br/>
              <div className="container">
                  <ResearchBar activeElement={id}></ResearchBar>
                  <div className="phase">
                      <span><h2>What problem are we solving?</h2></span>
                      <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                              <PhotoZoom src={P1} alt="Bidi_and_Stacy"/>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                              <p>Student loans, serving as a long-term investment, provide students opportunities
                                  to enroll in higher education that would otherwise be unattainable. But the student
                                  loan experience can be difficult to access in many senses — students and parents often
                                  run into issues and get frustrated by the long and tedious loan application process,
                                  loan options, repayment plan, APR, etc.</p>
                              <p>Lots of applicants are potentially constrained by limited financial literacy, lack of
                                  credit history, or lack of motivation, which prompt them to drop out of the application
                                  process and be unable to obtain the loan that is crucial for their education goal.</p>
                              <p>So what causes people to drop out of the application? What prevents students from
                                  applying for a loan? We looked into the problem space and design a simplified student
                                  loan experience.</p>
                          </div>
                      </div>
                  </div>
                  <div className="phase">
                      <span><h2>What approach are we taking?</h2></span>
                      <p>We used the Model of Design Research to guide our project at large. Our materials are divided into
                          three major sections: <b><em>Exploratory Research</em></b>, <b><em>Generative Research</em></b>,
                          and <b><em>Evaluative Research</em></b>. Within each section, we conduct research iteratively
                          and continuously validate our assumptions, user needs, and pivot our project direction.
                      </p>
                      <br/>
                      <h4>An overview of the content under each design research phase:</h4>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                                  <h4>Exploratory Research</h4>
                                  <ul>
                                      <li>Research Process</li>
                                      <li>Interview Materials</li>
                                      <li>Research Artifacts</li>
                                      <li>Insights</li>
                                  </ul>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                  <h4>Generative Research</h4>
                                  <ul>
                                      <li>Hypothesis & Assumptions</li>
                                      <li>Need Validation Process</li>
                                      <li>Conceptual Prototypes</li>
                                      <li>Design Opportunities</li>
                                  </ul>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                  <h4>Evaluative Research</h4>
                                  <ul>
                                      <li>Hi-Fidelity Prototypes</li>
                                      <li>Usability Testing</li>
                                      <li>What We Learned</li>
                                      <li>Dive into Solution Space</li>
                                  </ul>
                              </div>
                      </div>
                              <img src={Model} alt="Design_Model"/>
                              <div className={"footnote"}>
                                  Read about the Model of Design Research <a target={"_blank"} href={"https://www.sd.polyu.edu.hk/iasdr/proceeding/papers/Generative%20Research%20in%20Design%20Education.pdf"}>here</a>
                              </div>

                      </div>

                  <div className="phase">
                      <span><h2>Our interim design ideas</h2></span>
                      <div className="row" style={{'marginBottom':'-50px'}}>
                          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                              <p><b>Overview:</b> From earlier research, we found that borrowers lack a sense of context (e.g.
                                  “what should I do to repay some principle while in-school?”, “how does the $25/mo plan
                                  differ from a defer plan?”, “Is it bad if i don’t pay towards principle at school?”) when
                                  they fill out the application, which leads to indecisions on loan selections. Therefore,
                                  we designed two types of prototypes to accommodate this user need.</p>
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-6" style={{"text-align":"center"}}>
                              <div className="cardWrapper">
                                  {/*<Card cardStyle={this.state.cardStyle} />*/}
                                  <Cards></Cards>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>

          </div>
    );
  }
}

export default ResearchProblem;
