import React from "react";
import { useParams } from "react-router";
import "./ResearchPhase.scss";
import "../Research.scss";
import Hypothesis from '../../../assets/imgs/4.png'
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import ResearchData from "../ResearchData";
import ResearchBar from "../../../components/ResearchBar/ResearchBar";
import PhotoZoom from "../../../components/PhotoZoom/PhotoZoom";
import Storyboard1 from "../../../assets/imgs/storyboard1.png";
import Storyboard2 from "../../../assets/imgs/storyboard2.png";
import Storyboard3 from "../../../assets/imgs/storyboard3.png";
import Archetype from "../../../assets/imgs/Archetype.png";

import Tabs from "../../../components/Tabs/Tabs";
import Bolb from "../../../assets/svg/bolb.svg";
import Opportunity from "../../../assets/svg/opportunity.svg"

class ResearchGen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ResearchData,
        }
    }

    render() {

        const id = 3;
        const title = ResearchTitleList.filter(title => title.id === id)[0];
        const {name, photo, keyLine} = title;
        const {list} = this.state;
        return (
            <div className="research">
                <div className="BannerImage">
                    <img style={{width: "100%"}} src={photo} alt={name}/>
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
                        <div label={Bolb} title={"VALIDATE USER NEEDS"}>
                            <div className="phase">
                                <span><h2 className="col-12">Hypothesis and Assumptions</h2></span>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <p>After weeks of exploratory research, we had a good baseline of insights we’d
                                            learned from our customer base. The best way to figure out where this
                                            insights might lead us was to make something! Storyboards and conceptual
                                            prototypes can be used not as a “sure” solution, but as a research tool in
                                            and of themselves. Putting an idea in front of a user elicits a reaction
                                            (positive or negative) that helps us validate the needs we identified. </p>
                                        <p>We entered this phase with the following hypotheses: </p>
                                        <p className="emphasize">Because [Customers narrowly focus on “rates”, largely
                                            ingoing other forms of value], providing stories from the previous DSL
                                            customers will help the users contextualize the loan selections so as to
                                            make a better decision</p>
                                        <p className="emphasize">Because [loan selections look the same for everyone and
                                            not personalized], building a recommending system based on the users’ survey
                                            results of their college and financial plan will help them make a faster
                                            decision</p>
                                        <p className="emphasize">Because [people make decisions within their comfort
                                            zone], offering a financial package which includes student loans and other
                                            products to young adults will convert more DSL customers!</p>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <PhotoZoom src={Hypothesis} alt="stacy_and_jackie"/>
                                    </div>
                                </div>
                            </div>
                            <div className="phase">
                                <span><h2 className="col-12">How might we validate whether or not customers truly have these needs?</h2></span>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <p>We used three storyboards to test our hypotheses with parents and students.
                                            These tests taught us a lot about what our users valued, and whether or not
                                            our identified needs were accurate. </p>
                                        {/*<img src={Storyboard1}/>*/}
                                        <div className="photoDeck">
                                            <PhotoZoom photoId="photo1" src={Storyboard1}/>
                                            <br/>
                                            <PhotoZoom photoId="photo2" src={Storyboard2}/>
                                            <br/>
                                            <PhotoZoom photoId="photo3" src={Storyboard3}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <p>At the same time, we tested out a few “conceptual prototypes” - another form
                                            of low-fidelity ideas validation.
                                            These prototypes presented three “alternatives” to the loan product
                                            selection page, which we placed side-by-side and asked users to compare.</p>
                                        <p> One example, shown below, added a personalized component to the page; users
                                            could see an archetype of their
                                            “financial planning style,” as well as read stories from similar students to
                                            help contextualize the possible
                                            long-term effects of different repayment plans.</p>
                                        <PhotoZoom src={Archetype}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div label={Opportunity} title={"ITERATIVE DESIGN RESEARCH"}>
                            <div className="phase">
                                <span><h2 className="col-12">Step 1: Conceptual Prototypes</h2></span>
                                <div className="row">
                                    <div className="col-12">
                                        <p>After understanding customer needs and pain points, we created and tested
                                            conceptual prototypes
                                            with end users. These prototypes consisted of wireframes illustrating our
                                            solution ideas.
                                            Testing conceptual prototypes is a means of ‘design research’ in which
                                            providing something
                                            tangible to view and react to instead of discussing abstract concepts can
                                            greatly facilitate
                                            discussion and provide deep qualitative insights.</p>
                                    </div>
                                </div>
                                    {list.map((prototype, idx) => {
                                        return (
                                            <div className="row conceptual" key={idx}>
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <PhotoZoom src={ prototype.profile } alt={prototype.pageTitle}/>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <h4>Overview</h4>
                                                    <p>{prototype.overview}</p>
                                                    <h4>Pros & Cons</h4>
                                                    <ul>{prototype.summary.map((content, idx) => {
                                                        return (<li key={idx}>{content}</li>)
                                                    })}</ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        );
    }
};

export default ResearchGen;
