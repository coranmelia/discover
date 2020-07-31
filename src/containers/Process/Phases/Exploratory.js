import React from "react";
// import { useParams } from "react-router";
import "./ResearchPhase.scss";
import SevenAreas from "../../../assets/imgs/7areas.jpeg";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import "../Research.scss";
import PhotoZoom from "../../../components/PhotoZoom/PhotoZoom";
import SM1 from "../../../assets/artifacts/sm1.png";
import SM2 from "../../../assets/artifacts/sm2.png";
import JM from "../../../assets/artifacts/jm.png";
import PG from "../../../assets/artifacts/pg.jpg";
import PL from "../../../assets/artifacts/pl.jpg";
import SH from "../../../assets/artifacts/sh.jpg";
import SI from "../../../assets/artifacts/si.jpg";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import Tooltip from "../../../components/Tooltip/Tooltip";
import TooltipList from "../../../components/Tooltip/TooltipList";

const Exploratory = () => {
  const id = 2;
  const title = ResearchTitleList.filter(title => title.id === id)[0];
  const { name, photo } = title;


  return (
      <div className="research">
        <div className="BannerImage">
          <img style={{ width: "100%" }} src={photo} alt={name} />
        </div>
        <div className="Banner container">
            <div className="BannerTextContainer">
                <h1 className="BannerText--light">{name}</h1>
            </div>
        </div>
        <br/>
        <div className="container">
            <ProgressBar progress={1}/>
                    <div className="phase">
                        <span><h2> <span className={"tooltips"}> Find answers <Tooltip content={TooltipList[7]}/></span>through ambiguity</h2></span>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>After conducting initial primary and secondary research, we better understood the areas we needed to investigate further. Using every designer’s two favorite tools - sticky notes and a whiteboard - we listed our pressing questions and sorted the results. We ended up with <b>“seven streams”</b> of questions to explore:.</p>
                                <ul>
                                    <li>Long-term Planning</li>
                                    <li>Community Engagement & Support</li>
                                    <li>The Loan Application</li>
                                    <li>Parent-Student Dynamic</li>
                                    <li>Financial Literacy</li>
                                    <li>Customer Perceptions & Needs</li>
                                    <li>Business Strategy</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img src={SevenAreas} alt="7Areas"/>
                            </div>
                        </div>
                    </div>
                    <div className="phase">
                        <h4>Research Goals.</h4>
                        <span><h2>How might we improve customer conversion?</h2></span>
                        <div className="row">
                            <p className="col-lg-6 col-md-6 col-sm-12">
                                Our overarching goal was to help improve Discover Student Loans’ customer conversion by improving the product selection experience. Product selection is a late step in the application process, in which the student selects an exact plan (Which APR? Interest-only payments? Fixed payments? Deferred payments?) This decision relies on a web of complex factors, such as financial literacy, financial need, post-graduation prospects, and personal priorities.
                            </p>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>Specifically, we aimed to:</p>
                                <ul>
                                    <li>Understand customers' (i.e., students and parents)
                                        decision-making in applying for and selecting a
                                        student loan product;</li>
                                    <li>Assess why customers are currently dropping out of the
                                        DSL application at the product selection stage;</li>
                                    <li>Design and prototype a solution to reduce this
                                        drop-off.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="phase">
                        <h4>Stakeholder Map & Customer Journey Map.</h4>
                        <span><h2>Learn about Stakeholders & Customers</h2></span>
                        <div className="row">
                            <div className="col-12">
                                <p>We created 2 stakeholder maps to form a full understanding of the stakeholders involved,
                                    their relationships, and the ways in which they exchange value. In the same vein, after
                                    some primary research, we created a customer journey map to better understand a customer’s
                                    “journey” through student loan applications in order to identify the larger use context
                                    as well as emotions, pain points, and solution opportunities for customer actions.</p>
                            </div>
                        </div>
                        <div className="row conceptual">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <PhotoZoom src={SM1} alt={"SM1"}/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <PhotoZoom src={SM2} alt={"SM2"}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-12 no-shadow">
                                <PhotoZoom src={JM} alt={"JM"}/>
                            </div>
                        </div>
                    </div>
                    <div className="phase no-shadow">
                        <h2><span className={"tooltips"}> Build Customer Personas <Tooltip content={TooltipList[8]}/></span></h2>
                        <div className="row">
                            <div className="col-12">
                                <p>A “Persona” is a fictional representation of an actual user and is applied in the early stages of product development or product redesign.
                                    Personas are vital to the success of a product because they drive design decisions by taking common user needs and bringing them to the
                                    forefront of planning before design has actually started. </p>
                                <p>We created 2 student persona and 2 parent persona to capture the most typical (and probably the most extreme)
                                    types of students and parents we've seen in our research and interviews. Building personas gives our team
                                    an opportunity to discuss critical features of a redesign, and provides a shared understanding of who the target
                                    users should be.</p>
                                </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                                <h3>Student Personas</h3>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>We identified two major types of students in our journey of research. One type of students is so-called the
                                    <b>"sheltered scholar"</b> who trust their parents in making loan decisions and worry little about the financial aspects.
                                    Their main goal is to get into their dream school and enjoy the college life. Typically, this type of students' role in the
                                    loan application is to "find whatever resource they can", and leave the rest for their parents to deal with.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>The other type of students is so-called the <b>"pragmatic planner"</b> who wants to know every aspect about the loan.
                                    They use loan calculators to compare rates of different lenders and carefully plan for how to payback the loan.
                                    They want to figure out which is the most beneficial loan and plan to pay it back as quickly as possible.</p>
                            </div>
                        </div>
                        <div className="row conceptual">
                            <div className="col-12">
                                <PhotoZoom src={SI} alt={"PL"}/>
                                <div className={"footnote"}> "Sheltered Scholar" Student Persona </div>
                            </div>
                        </div>
                        <div className="row conceptual">
                            <div className="col-12">
                                <PhotoZoom src={SH} alt={"PG"}/>
                                <div className={"footnote"}> "Pragmatic Planner" Student Persona </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                                <h3>Parent Persona</h3>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>We identified two major types of parents. One type is the parents as <b>"guide"</b> who wants to provide financial education
                                    to their child and guide the child through the college financing process. They except the child to learn from this journey
                                    and be responsible for their own future. </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>The other type of parents is the parents as <b>"leader"</b> who are taking the most financial responsibility in the process.
                                    They want to protect their child from getting into huge amount of debt since early on and try to avoid applying for loans
                                    unless they really have to.</p>
                            </div>
                        </div>
                        <div className="row conceptual">
                            <div className="col-12">
                                <PhotoZoom src={PG} alt={"PG"}/>
                                <div className={"footnote"}> Parent as "guide" Persona </div>
                            </div>
                        </div>
                        <div className="row conceptual">
                            <div className="col-12">
                                <PhotoZoom src={PL} alt={"PL"}/>
                                <div className={"footnote"}> Parent as "lead" Persona </div>
                            </div>
                        </div>
                    </div>
        </div>

      </div>
  );
};

export default Exploratory;
