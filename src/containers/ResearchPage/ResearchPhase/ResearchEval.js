import React from "react";
import { useParams } from "react-router";
import "./ResearchPhase.scss";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import ResearchBar from "../../../components/ResearchBar/ResearchBar";
import "../Research.scss";

const ResearchEval = () => {
  const id = 4;
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
            <div className="phase">
                <div className="row">
                    <span><h2>Lo-Fi Prototype</h2></span>
                    <p>Coming Soon in May :)</p>
                </div>
            </div>
        </div>
      </div>
  );
};

export default ResearchEval;
