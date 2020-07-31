import React from "react";
// import { useParams } from "react-router";
import "./ResearchPhase.scss";
import inapp from "../../../assets/mvp/inapp.jpg";
import progress from "../../../assets/mvp/progress.jpg";
import socialproof from "../../../assets/mvp/socialproof.jpg";

import ResearchTitleList from "../../../components/ResearchBar/PageList";
import "../Research.scss";
import PhotoZoom from "../../../components/PhotoZoom/PhotoZoom";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import b1 from "../../../assets/mvp/b1.svg";
import b2 from "../../../assets/mvp/b2.svg";
import b3 from "../../../assets/mvp/b3.svg";
import Tooltip from "../../../components/Tooltip/Tooltip";
import TooltipList from "../../../components/Tooltip/TooltipList";

const MVP = () => {
  const id = 5;
  const title = ResearchTitleList.filter(title => title.id === id)[0];
  const { name, photo} = title;


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
            <ProgressBar progress={4}/>

                    <div className="phase">
                        <span><h2> <span className={"tooltips"}> In-App Guidance <Tooltip content={TooltipList[12]}/></span> becomes our “MVP“</h2></span>

                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <p>
                                    Going off the three validated needs, we created three lo-fi prototypes through several iterations, each of which underlines one major validated need.
                                </p>
                                <p>
                                    In this round of testing, “Provide resources within the app” became our MVP feature—the idea of <b>“having a customized tool to help me make an educated decision”</b> received overwhelmingly positive feedback. We were able to take the gist of all three prototypes and build up our final solution.
                                </p>
                            </div>
                        </div>
                        <br/>
                    </div>
        </div>
          <div className="container-fluid bg-cream">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img src={b1} alt={"b1"}/>
                        <h3>Provide resources within the app</h3>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img src={b2} alt={"b1"}/>
                        <h3>Track one’s progress in the customer journey</h3>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img src={b3} alt={"b1"}/>
                        <h3>Seek social proof from others’ choices</h3>
                    </div>
                </div>
            </div>
          </div>
          <div className="container">
            <div className="phase">
                <h4>Design Prototype I</h4>
                <span><h2> <span className={"tooltips"}> Provide resources<Tooltip content={TooltipList[13]}/></span>within the app</h2></span>
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>
                            This prototype explored how customized in-app resources may help users understand student loans while they are actually filling out the application. We provided:
                        </p>
                        <p>
                            <span className={"bold"}>Quizzes</span> —to assess users’ familiarity with loan-related knowledge.
                        </p>
                        <p><span className={"bold"}>Customized resources</span> —filtered by the quiz results to fill in customers’ knowledge gaps.</p>
                        <span><h4 className={"h4--light"}>Finding</h4></span>
                        <p>
                            Customers don’t want to waste time reading what they already know—a way of customizing the guidance makes them feel like they are being taken care of.
                        </p>
                        <h3>“I like the idea of a customized tool to help me make an educated decision”</h3>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 no-shadow img-fluid">
                        <PhotoZoom src={inapp} alt="socialproof"/>
                    </div>

                </div>
            </div>
            <div className="phase">

                <h4>Design Prototype II</h4>
                <span><h2>Track one’s progress in the customer journey</h2></span>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>
                            This prototype explores how progress tracking helps users break down a complex problem into small, digestible steps. Our redesign includes:
                        </p>
                        <p>
                            <span className={"bold"}>Progress tracking</span> — tracking the progress of the student loan application journey: student application, co-signer application, and choosing the loan product.
                        </p>
                        <p><span className={"bold"}>Overview of materials</span> — an overview of application materials and links to student loan resourcesto help users kick off the process.</p>
                        <span><h4 className={"h4--light"}>Finding</h4></span>
                        <p>
                            Users appreciate the progress tracking as it enhance the motivation for them to complete the process.
                        </p>
                        <h3>“I appreciate a birds-eye view of the loan application”</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 no-shadow img-fluid ">
                        <PhotoZoom src={progress} alt="socialproof"/>
                    </div>
                </div>
            </div>
                <div className="phase">
                    <h4>Design Prototype III</h4>
                    <span><h2>Seek social proof from others’ choices.</h2></span>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>
                                    This prototype explores how the concept of social proof may help customers better understand how a loan makes sense in their own life—by seeing what someone like you has done, you are likely to be more confident in that action.
                                </p>
                                <p>
                                    <span className={"bold"}>Filters</span> — explore various types of characteristics that may be similar to the customer.
                                </p>
                                <p><span className={"bold"}>“Email a current student” </span> — from the student’s school who has used that loan product in the past. </p>
                                <span><h4 className={"h4--light"}>Finding</h4></span>
                                <p>
                                    For young college students, seeking social proof could be very important! However, for parents, this is not that big of a deal. In our user interviews, we found that parents prefer to trust their own judgment for the final decision.
                                </p>
                                <br/>
                                <h3>“Seeking social proof is more of a student thing than a parent thing”</h3>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 no-shadow img-fluid ">
                                <PhotoZoom src={socialproof} alt="socialproof"/>

                            </div>

                        </div>
                </div>

        </div>


      </div>
  );
};

export default MVP;
