import React from "react";
import Sol from "../../assets/imgs/solution.jpg";
import resources from "../../assets/svg/resources.svg";
import glossary from "../../assets/svg/Glossary.svg";
import tools from "../../assets/svg/tools.svg";
import faqs from "../../assets/svg/FAQs.svg";
import resourcesW from "../../assets/svg/resourcesW.svg";
import glossaryW from "../../assets/svg/GlossaryW.svg";
import toolsW from "../../assets/svg/toolsW.svg";
import faqsW from "../../assets/svg/FAQsW.svg";
import f1 from "../../assets/solution/f1.jpg";
import f2 from "../../assets/solution/f2.jpg";
import f3 from "../../assets/solution/f3.jpg";
import f4 from "../../assets/solution/f4.jpg";
import solution from "../../assets/home/solution_full.png";
import "./Solution.scss";
import Tooltip from "../../components/Tooltip/Tooltip";
import TooltipList from "../../components/Tooltip/TooltipList";


export default class Solution extends React.Component{
render() {
    return(
        <div className="research">
            <div className="BannerImage">
                <img src={ Sol } alt="banner" />

            </div>
            <div className="Banner container">
                <div className="BannerTextContainer">
                    <h1 className="BannerText">OUR SOLUTION</h1>
                </div>
            </div>
            <br/>
            <div className="container-fluid bg-light-green">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={resourcesW} alt={"resources"}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4>In-App Resources</h4>
                                        <p>Curated articles and videos to complement the current section of the application.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={glossaryW} alt={"resources"}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4>Loan Glossary</h4>
                                        <p>
                                            Loan-specific domain knowledge with the definitions for relevant terms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={toolsW} alt={"resources"}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4>Loan Calculator</h4>
                                        <p>
                                            A tool to calculate how much to borrow, in-school payment options, budget, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-12">
                                        <img src={faqsW} alt={"resources"}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h4>FAQs</h4>
                                        <p>Contextualized answers to commonly asked questions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        <div className="container">
                <article className="phase">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 no-shadow" id={"solution"}>
                            <img src={ solution } alt={"solution"}/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <br/>
                            <br/>
                            <span><h4>Closing the Resource Gap.</h4></span>
                            <span><h2><span className={"tooltips"}> AppAssist<Tooltip content={TooltipList[14]}/></span></h2></span>
                            <p>
                                The value of designing an all-in-one application assistant has been well established in our user research — customers love the feeling of being taken care of and appreciate having instant support throughout the application journey.
                            </p>
                        </div>
                    </div>
                </article>
                <br/>
        </div>
                <article className="container-fluid bg-dark-green">
                    <div className="container">
                        <div className="row-cols-1">
                            <h3>
                                <span className={"tooltips"}>"This toolbox gives me a much better idea
                                    <Tooltip content={TooltipList[15]}/></span> of how student loans work! Without it, student loans are usually prolonged and intimidating."</h3>
                            <p className="text-right">— parent & 3-time student loan borrower</p>
                        </div>
                    </div>
                </article>
            <div className="container">
                <div className="phase">
                    <h4>A Closer Look at Our Features</h4>
                    <span><h2>Provide Guidance Throughout the Application</h2></span>
                    <br/>

                    <br/>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 no-shadow atomic--svg">
                            <div className="row">
                                <div className="col-2">
                                    <img src={ resources } alt="tools" />
                                </div>
                                <div className="col-10">
                                    <span><h3>In-app Resources</h3></span>
                                    <p>
                                        Customers have different modes of learning!
                                        While some people prefer to learn by watching a video, other people might prefer to
                                        read an article or highlights.
                                    </p>
                                    <p>
                                        AppAssist provides a hybrid form of resources to cater customers with different needs.
                                        Customers can toggle between different versions of the same resource,
                                        and the resources are powered by third-party student loan authorities!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-11 no-shadow">
                            <img src={ f1 } alt="tools" />
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 no-shadow atomic--svg">
                            <div className="row">
                                <div className="col-2">
                                    <img src={ glossary } alt="tools" />
                                </div>
                                <div className="col-10">
                                    <span><h3>Loan Glossary</h3></span>

                                    <p>
                                        Most of the tools and resources that people need already exist.
                                        However, they are not available in the application when they’re needed most.
                                    </p>
                                    <p>
                                        AppAssist provides a loan glossary within the application for users to check Loan-specific domain knowledge with the definitions for relevant terms.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5 col-md-11 no-shadow">
                            <img src={ f2 } alt="tools" />
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 no-shadow atomic--svg">

                            <div className="row">
                                <div className="col-2">
                                    <img src={ tools } alt="tools" />
                                </div>
                                <div className="col-10">
                                    <span><h3>Loan Calculator</h3></span>
                                    <p>A tool to calculate how much to borrow, in-school payment, budget, and more!</p>
                                    <br/>
                                    <p>
                                        Our research shows that if a lender wants to help customers figure out which loan is right for them, they’ll need to take a light approach.
                                        People are wary of lenders (loan sharks) even though you’re also seen as experts.
                                    </p>
                                    <p>
                                        AppAssist does not tell customers what to do, instead, it hands them the tool and help them help themselves.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5 col-md-11 no-shadow">
                            <img src={ f3 } alt="tools" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 no-shadow atomic--svg">

                            <div className="row ">
                                <div className="col-2">
                                    <img src={ faqs } alt="tools" />
                                </div>
                                <div className="col-10">
                                    <span><h3>FAQs</h3></span>
                                    <p>Customers usually need to switch out of the loan application in order to access the commonly asked questions as they
                                        often sit outside of the loan applications.
                                    </p>
                                    <p>
                                        By providing the right resources to customers in the application when they need it,
                                        we aim to close the resource gap.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5 col-md-11 no-shadow">
                            <img src={ f4 } alt="tools" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
}
