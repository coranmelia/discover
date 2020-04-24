import React, { Component } from "react";
import ResearchTitleList from "../../components/ResearchBar/PageList";
import "./ResearchProblem.scss";
import ResearchBar from "../../components/ResearchBar/ResearchBar";

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
                  <p className="IntroText">
                      {keyLine}
                  </p>
              </div>
              <div className="Banner">
                  <div className="BannerTextContainer">
                      <div className="BannerText">{name}</div>
                  </div>
              </div>
              <br/>
              <div className="container">
                  <ResearchBar activeElement={id}></ResearchBar>
                  <div className="row">
                      <h2>What problem are we solving?</h2>
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
                  <div className="row">
                      <h2>Our interim design ideas</h2>
                      <p>Overview: From earlier research, we found that borrowers lack a sense of context (e.g.
                          “what should I do to repay some principle while in-school?”, “how does the $25/mo plan
                          differ from a defer plan?”, “Is it bad if i don’t pay towards principle at school?”) when
                          they fill out the application, which leads to indecisions on loan selections. Therefore,
                          we designed two types of prototypes to accommodate this user need.</p>
                  </div>
              </div>
          </div>
    );
  }
}

export default ResearchProblem;
