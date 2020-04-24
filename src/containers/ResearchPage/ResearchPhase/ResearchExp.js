import React from "react";
import { useParams } from "react-router";
import "./ResearchPhase.css";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import ResearchBar from "../../../components/ResearchBar/ResearchBar";

const ResearchExp = () => {
  const id = 2;
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
                <h2 className="col-12">How might we dive into the problem?</h2>
                <h4 className="col-6">Diverge. Converge. And Repeat. </h4>
                <p>The fundamentals of Human-Centered Design is to identify the right problem;
                    to understand and prioritize human needs & limitations; and to build empathy,
                    ideate, prototype, and iterate.</p>
                <p>We used the “Double Diamond” model to guide our research and design. The two
                    diamonds represent a process of exploring an issue more widely or deeply
                    (divergent thinking) and then taking focused action (convergent thinking).  </p>
            </div>
            <div className="row">
                <h2 className="col-12">How might we dive into the problem?</h2>
                <p className="col-lg-6 col-md-6 col-sm-12">After coducting initial secondary research and interviewing stakeholders, we better
                    understood the areas we needed to investigate further. Using every designer’s two
                    favorite tools - sticky notes and a white board - we listed our pressing questions
                    and sorted the results. We ended up with “seven streams”.</p>
                <ul className="col-lg-6 col-md-6 col-sm-12">
                    <li>Long-term Planning</li>
                    <li>Community Engagement & Support</li>
                    <li>The DSL Application</li>
                    <li>The Parent-Student Dynamic</li>
                    <li>Financial Literacy</li>
                    <li>Customer Perceptions & Needs</li>
                    <li>Strategy</li>
                </ul>
            </div>
            <div className="row">
                <h2 className="col-12">Research Goal</h2>
                <h4 className="col-6">How might we improve DSL customer conversion?</h4>
                <p className="col-lg-6 col-md-6 col-sm-12">
                    Our overarching goal is to help improve Discover Student Loans customer
                    conversion by improving the product selection experience. Product selection
                    is a late step in the loan application process, in which the student selects
                    an exact plan (Which APR? Interest-only payments? Fixed payments? Deferred
                    payments?) This decision relies on a web of complex factors, such as financial
                    literacy, financial need, post-graduation prospects, and personal priorities.</p>
                <p className="col-lg-6 col-md-6 col-sm-12">Specifically, we aim to:
                <ul>
                    <li>Understand customer (i.e., students and parents)
                        decision-making in applying for and selecting a
                        student loan product;</li>
                    <li>Assess why customers are currently dropping out of the
                        DSL application at the product selection stage;</li>
                    <li>Design and prototype a solution to reduce this
                        drop-off.</li>
                </ul>
                </p>
            </div>
        </div>
      </div>
  );
};

export default ResearchExp;
