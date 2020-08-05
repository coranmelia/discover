import React from "react";
// import { useParams } from "react-router";
import "./ResearchPhase.scss";
import "../Research.scss";
import Hypothesis from '../../../assets/imgs/4.jpg'
import ResearchTitleList from "../../../components/ResearchBar/PageList";
import ResearchData from "../ResearchData";
import PhotoZoom from "../../../components/PhotoZoom/PhotoZoom";
import Storyboard1 from "../../../assets/imgs/storyboard1.png";
import Storyboard2 from "../../../assets/imgs/storyboard2.png";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import Tooltip from "../../../components/Tooltip/Tooltip";
import TooltipList from "../../../components/Tooltip/TooltipList";

class Generative extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ResearchData,
        }
    }

    render() {

        const id = 3;
        const title = ResearchTitleList.filter(title => title.id === id)[0];
        const {name, photo} = title;
        const {list} = this.state;
        return (
            <div className="research">
                <div className="BannerImage">
                    <img style={{width: "100%"}} src={photo} alt={name}/>
                </div>
                <div className="Banner container">
                    <div className="BannerTextContainer">
                        <h1 className="BannerText--light">{name}</h1>

                    </div>
                </div>
                <br/>
                <div className="container">
                    <ProgressBar progress={2}/>
                            <div className="phase">
                                <h4>Learning by making.</h4>
                                <span><h2>Hypothesis and Assumptions</h2></span>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <p>
                                            After weeks of exploratory research, we had a good baseline of insights we’d learned from our customer base.
                                            The best way to figure out where this insights might lead us was to make something! Putting an idea in front
                                            of someone elicits a reaction (positive or negative) that helps us validate the needs we identified. We
                                            entered this phase with the following hypotheses:
                                        </p>
                                        <p>Because customers narrowly focus on “rate,” largely ignoring other forms of value,
                                            providing stories from previous customers will <b>help them contextualize the
                                                loan selections so as to make a better decision</b>.</p>
                                        <p>Because loan selections look the same for everyone and are not personalized,
                                            building a recommendation system based on a customer’s college and financial
                                            plan will <b>help them make a faster decision</b>.</p>
                                        <p>Because people make decisions within their comfort zone, offering a financial
                                            package which includes student loans and other products to young adults will
                                            <b> convert more customers!</b></p>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <br/>
                                        <br/>
                                        <PhotoZoom src={Hypothesis} alt="stacy_and_jackie"/>
                                    </div>
                                </div>
                            </div>
                            <div className="phase">

                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <h4>Semi-Structured Interviews.</h4>
                                        <span><h2>How might we validate whether or not customers truly have these needs?</h2></span>
                                        <p>We used three storyboards to test our hypotheses with parents and students.
                                            These tests taught us a lot about what our users valued, and whether or not
                                            our identified needs were accurate. </p>
                                        <p>At the same time, we tested out a few “conceptual prototypes” - another form
                                            of low-fidelity ideas validation.
                                            These prototypes presented three “alternatives” to the loan product
                                            selection page, which we placed side-by-side and asked users to compare.</p>
                                        <p> One example, shown below, added a personalized component to the page; users
                                            could see an archetype of their
                                            “financial planning style,” as well as read stories from similar students to
                                            help contextualize the possible
                                            long-term effects of different repayment plans.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">

                                        <div className="photoDeck">
                                            <PhotoZoom photoId="photo1" src={Storyboard1}/>
                                            <br/>
                                            <PhotoZoom photoId="photo2" src={Storyboard2}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="phase">
                                <h4>Conceptual Prototypes.</h4>
                                <span><h2> <span className={"tooltips"}> Testing <Tooltip content={TooltipList[9]}/></span> with concepts</h2></span>
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
                                                <span><h3>{prototype.pageTitle}</h3></span>
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
            </div>
        );
    }
};

export default Generative;
