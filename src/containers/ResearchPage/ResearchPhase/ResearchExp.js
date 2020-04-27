import React from "react";
import { useParams } from "react-router";
import "./ResearchPhase.scss";
import DoubleDiamond from "../../../assets/imgs/research.png";
import SevenAreas from "../../../assets/imgs/7areas.jpeg";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import ResearchBar from "../../../components/ResearchBar/ResearchBar";
import "../Research.scss";
import PhotoZoom from "../../../components/PhotoZoom/PhotoZoom";
import Opportunity from "../../../assets/svg/opportunity.svg";
import Tabs from "../../../components/Tabs/Tabs";
import Frame from  "../../../assets/svg/Frame.svg";
import SM1 from "../../../assets/artifacts/sm1.png";
import SM2 from "../../../assets/artifacts/sm2.png";
import JM from "../../../assets/artifacts/jm.png";
import PG from "../../../assets/artifacts/pg.jpg";
import PL from "../../../assets/artifacts/pl.jpg";
import SH from "../../../assets/artifacts/sh.jpg";
import SI from "../../../assets/artifacts/si.jpg";

const ResearchExp = () => {
  const id = 2;
  const title = ResearchTitleList.filter(title => title.id === id)[0];
  const { name, photo, keyLine } = title;


  return (
      <div className="research">
        <div className="BannerImage">
          <img style={{ width: "100%" }} src={photo} alt={name} />
        </div>
        <div className="Banner">
            <div className="BannerTextContainer">
                <div className="BannerText">{name}</div>
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
<Tabs>
            <div label={Opportunity} title={"RESEARCH PROCESS"}>
            <div className="phase">
                <span><h2 className="col-12">How might we dive into the problem?</h2></span>
                <div className="row">
                    <h4 className="col-sm-12 col-md-6 col-lg-6">Diverge. Converge. And Repeat. </h4>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p>The fundamentals of Human-Centered Design is to identify the right problem;
                        to understand and prioritize human needs & limitations; and to build empathy,
                        ideate opportunities, prototype solutions, and iterate.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p>We used the <b>“Double Diamond”</b> model to guide our research and design. The two
                            diamonds represent a process of exploring an issue more widely or deeply
                            (divergent thinking) and then taking focused action (convergent thinking).  </p>
                    </div>
                </div>
                <div className="row doubleDiamond">
                    <PhotoZoom src={DoubleDiamond} alt="research"/>
                    <span className="footnote">Read about the Double Diamond Theory <a target="_blank"
                        href={"https://www.designcouncil.org.uk/news-opinion/what-framework-innovation-design-councils-evolved-double-diamond"}>
                             here</a></span>
                </div>
            </div>
            <div className="phase">
                <span><h2 className="col-12">Find answers through ambiguity</h2></span>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>After conducting initial secondary research and interviewing stakeholders, we better
                            understood the areas we needed to investigate further. Using every designer’s two
                            favorite tools - sticky notes and a white board - we listed our pressing questions
                            and sorted the results. We ended up with <b>“seven streams”</b>.</p>

                        <ul>
                            <li>Long-term Planning</li>
                            <li>Community Engagement & Support</li>
                            <li>The DSL Application</li>
                            <li>The Parent-Student Dynamic</li>
                            <li>Financial Literacy</li>
                            <li>Customer Perceptions & Needs</li>
                            <li>Strategy</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <PhotoZoom src={SevenAreas} alt="7Areas"/>
                    </div>
                </div>
            </div>
            <div className="phase">
                <span><h2 className="col-12">Research Goal</h2></span>
                <div className="row">
                    <h4 className="col-12">How might we improve DSL customer conversion?</h4>
                </div>
                <div className="row">
                    <p className="col-lg-6 col-md-6 col-sm-12">
                        Our overarching goal is to help improve Discover Student Loans customer
                        conversion by improving the product selection experience. Product selection
                        is a late step in the loan application process, in which the student selects
                        an exact plan (Which APR? Interest-only payments? Fixed payments? Deferred
                        payments?) This decision relies on a web of complex factors, such as financial
                        literacy, financial need, post-graduation prospects, and personal priorities.</p>
                    <div className="col-lg-6 col-md-6 col-sm-12">Specifically, we aim to:
                        <ul>
                            <li>Understand customer (i.e., students and parents)
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
            </div>
    <div label={Frame} title={"RESEARCH ARTIFACTS"}>
        <div className="phase">
            <span><h2 className="col-12">Stakeholder Map & Customer Journey Map</h2></span>
            <div className="row">
                <p>We created 2 stakeholder maps to form a full understanding of the stakeholders involved,
                    their relationships, and the ways in which they exchange value. In the same vein, after
                    some primary research, we created a customer journey map to better understand a customer’s
                    “journey” through student loan applications in order to identify the larger use context
                    as well as emotions, pain points, and solution opportunities for customer actions.</p>
            </div>
            <div className="row conceptual">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <PhotoZoom src={SM1} alt={"SM1"}/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <PhotoZoom src={SM2} alt={"SM2"}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <PhotoZoom src={JM} alt={"JM"}/>
                </div>
            </div>
        </div>
        <div className="phase">
            <span><h2 className="col-12">Our Persona</h2></span>
            <div className="row">
                <p>A “Persona” is a fictional representation of an actual user and is applied in the early stages of product development or product redesign.
                    Personas are vital to the success of a product because they drive design decisions by taking common user needs and bringing them to the
                    forefront of planning before design has actually started. </p>
                <p>We created 2 student persona and 2 parent persona to capture the most typical (and probably the most extreme)
                    types of students and parents we've seen in our research and interviews. Building personas gives our team
                    an opportunity to discuss critical features of a redesign, and provides a shared understanding of who the target
                    users should be.</p>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <h3>Student Persona</h3>
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
</Tabs>
        </div>

      </div>
  );
};

export default ResearchExp;
