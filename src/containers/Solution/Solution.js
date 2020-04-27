import React from "react";
import Banner from "../../assets/svg/banner.svg";
import ResearchBar from "../../components/ResearchBar/ResearchBar";

export default class Solution extends React.Component{
render() {
    return(
        <div className="Home">
            <div className="BannerImage">
                <img src={ Banner } alt="banner" />

            </div>
            <div className="Banner">
                <div className="BannerTextContainer">
                    <div className="BannerText">Discover x MHCI Solution</div>
                    <div className="break"></div>
                </div>
            </div>
            <br/>
            <div className="container">
                <ResearchBar activeElement={5}></ResearchBar>
                {/*<br/>*/}
                <h2>Coming Soon in August :)</h2>
            </div>
        </div>

    );
}
}
