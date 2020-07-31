import React from "react";
// import { useParams } from "react-router";
import "./ResearchPhase.scss";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import s1 from "../../../assets/need/s1.jpg";
import s2 from "../../../assets/need/s2.jpg";
import "../Research.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import Tooltip from "../../../components/Tooltip/Tooltip";
import TooltipList from "../../../components/Tooltip/TooltipList";

const NeedValidation = () => {
  const id = 4;
  const title = ResearchTitleList.filter(title => title.id === id)[0];
  const { name, photo } = title;


  return (
      <div className="research">
          <div className="BannerImage">
              <img style={{ width: "100%" }} src={photo} alt={name} />
          </div>
          <div className="Banner container">
              <div className="BannerTextContainer">
                  <h1 className="BannerText">{name}</h1>
              </div>
          </div>
        <br/>
        <div className="container">
            <ProgressBar progress={3}/>
            <div className="phase">
                <div className="row">
                   <h2 className={"col-10"}><span className={"tooltips"}> In which direction <Tooltip content={TooltipList[10]}/></span> shall we move forward?</h2>

                    <div className="col-lg-8 col-md-12">
                        <p>
                            After four months of research and divergence, it was time to begin converging towards one final solution. We decided to start with Customization & Contextualization.
                        </p>
                        <p>
                            Contextualization is a core issue we’ve identified with making big loan decisions — customers struggle to understand how the choice they’re making will affect them personally.
                        </p>
                        <p>
                            The next step for us was to validate whether this was a true customer need. Do customers truly crave customization along the application journey？Does lack of context cause anxiety and prevent customers from committing to a loan?
                        </p>
                    </div>
                </div>
            </div>
            <div className="phase">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h4>Needs validation.</h4>
                        <span><h2><span className={"tooltips"}>“Which loan product <Tooltip content={TooltipList[11]}/></span>is right for me?”</h2></span>
                        <p>
                            We sketched & critiqued ideas for enabling customization & contextualization for Discover Student Loans (DSL) customers.
                        </p>
                        <p>
                            The ideas have a variety of risk levels. For example, a less risky idea might be to “list the pros and cons of each loan plan” in order to help users conceptualize the trade-offs. A more risky idea might be to “build an interactive game for students to experience a day at college” in order to help them contextualize what their financial life would be like if they choose different loan plans.
                        </p>
                        <p>
                            We finalized 12 storyboards and tested with 12 users. Are customization & contextualization true user needs? What kinds are most useful?
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 pad--bottom">
                        <br/>
                        <br/>
                        <img src={ s1 } alt={"s1"}/>
                        <img src={ s2 } alt={"s2"}/>
                    </div>
                </div>
            </div>
            <div className="phase">
                <h4>Conclusion.</h4>
                <span><h2>Validated Needs</h2></span>
                <div className="row">
                    <div className="col-lg-6 col-md-12 pad--bottom">
                        <p>
                            Throughout user research, there were three major findings that seemed the most prominent to us. We found that loan customers...
                        </p>
                    </div>
                    <div className="col-12 pad--bottom">
                        <br/>
                        <ul>
                            <li><h3>Need to receive guidance while applying for student loans</h3></li>
                            <li><h3>Need to know what relatable others have chosen</h3></li>
                            <li><h3>Need to feel less intimidated/overwhelmed by the loan application</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default NeedValidation;
