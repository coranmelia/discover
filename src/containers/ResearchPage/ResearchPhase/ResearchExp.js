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
                        ideate, prototype, and iterate.</p>
                        <p>We used the “Double Diamond” model to guide our research and design. The two
                            diamonds represent a process of exploring an issue more widely or deeply
                            (divergent thinking) and then taking focused action (convergent thinking).  </p>
                    </div>
                </div>
                <div className="row doubleDiamond">
                    <PhotoZoom src={DoubleDiamond} alt="research"/>
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
    <div label={Frame} title={"INSIGHTS & OPPORTUNITIES"}>
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
    </div>
</Tabs>
        </div>

      </div>
  );
};

export default ResearchExp;
