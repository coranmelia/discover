import React from "react";
import { useParams } from "react-router";
import "./ResearchPhase.css";
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import ResearchBar from "../../../components/ResearchBar/ResearchBar";

const ResearchGen = () => {
  const id = 3;
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
        </div>
      </div>
  );
};

export default ResearchGen;
