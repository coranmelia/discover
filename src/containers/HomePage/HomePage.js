import React from "react";
import { NavLink } from "react-router-dom";
import Banner from '../../assets/imgs/banner.jpg';
import tools from '../../assets/svg/tools.svg';
import resources from '../../assets/svg/resources.svg';
import faqs from '../../assets/svg/FAQs.svg';
import glossary from '../../assets/svg/Glossary.svg';
import solution from '../../assets/home/solution_full.png';
import team from '../../assets/home/team.jpg';
import client from '../../assets/home/client.jpg';
import stakeholdermap from '../../assets/artifacts/sm1.png'
import "./HomePage.scss";
import appRoutes from "../../shared/appRoutes";
import Tooltip from "../../components/Tooltip/Tooltip";
import TooltipList from "../../components/Tooltip/TooltipList";

export default class homePage extends React.Component{

  render() {
      return (
          <div className="Home">
              <div className="BannerImage">
                  <img src={ Banner } alt="banner" />
              </div>
              <div className="Banner container">
                  <h5>DISCOVER X MHCI</h5>
                  <div className="BannerTextContainer">
                      <h1 className="BannerText">BE CONFIDENT ABOUT YOUR STUDENT LOAN CHOICE. </h1>

                  </div>
                  <div className="IntroContainer">
                      <p className="IntroText">
                          Discover Student Loans’ AppAssist provides guidance right where you need it most.
                      </p>
                  </div>
              </div>
              <br/>
              <div className="container">
                  <div className="phase">
                      <h4>Solution.</h4>
                      <span><h2>Discover AppAssist</h2></span>
                      <br/>
                      <br/>
                      <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12 no-shadow" id={"home--solution"}>
                              <img src={ solution } alt={"solution"}/>
                              {/*<div id="home-solution"></div>*/}
                          </div>

                          <div className="col-lg-6 col-md-12 col-sm-12 no-shadow atomic--svg">
                              <br/>
                              <div className="row">
                                  <div className="col-2">
                                      <img src={ resources } alt="tools" />
                                  </div>
                                  <div className="col-10">
                                      <span><h4 className={"bold"}>in-app resources</h4></span>
                                      <p>Curated articles and videos to complement the current section of the application.</p>
                                  </div>
                              </div>
                              <br/>

                              <div className="row">
                                  <div className="col-2">
                                      <img src={ glossary } alt="tools" />
                                  </div>
                                  <div className="col-10">
                                      <span><h4 className={"bold"}>Loan Glossary</h4></span>
                                      <p>Loan-specific domain knowledge with the definitions for relevant terms.</p>
                                  </div>
                              </div>
                              <br/>

                              <div className="row">
                                  <div className="col-2">
                                      <img src={ tools } alt="tools" />
                                  </div>
                                  <div className="col-10">
                                      <span><h4 className={"bold"}>Loan Calculator</h4></span>
                                      <p>A tool to calculate how much to borrow, in-school payment options, budget, and more.</p>
                                  </div>
                              </div>
                              <br/>

                              <div className="row ">
                                  <div className="col-2">
                                      <img src={ faqs } alt="tools" />
                                  </div>
                                  <div className="col-10">
                                      <span><h4 className={"bold"}>faqs</h4></span>
                                      <p>Contextualized answers to commonly asked questions.</p>
                                  </div>
                              </div>
                              <br/>
                              <NavLink className="nav-link" to={appRoutes.solution}>
                                  <button type={"button"} className={"blob-btn"}> <h4>View our solution</h4>
                                      <span className="blob-btn__inner">
                                          <span className="blob-btn__blobs">
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                          </span>
                                      </span>
                                  </button>
                              </NavLink>
                          </div>

                      </div>
                  </div>
                  <div className="phase no-shadow">
                      <span><h2>View Our Project In Depth</h2></span>
                      <div className="row">
                          <div className="col-lg-6 col-md-12">
                            <img src={ stakeholdermap } alt={ "stacy_jackie" }/>
                          </div>
                          <div className="col-lg-6 col-md-12">
                             <p>
                                 As student loan providers increasingly focus on attracting college-bound customers, they often overlook the needs of the true primary borrower - parents. Despite a plethora of articles, videos, and tools that exist on the internet, their lack of context leaves them under-utilized, leaving parents to default to sources within their comfort zone.
                             </p>
                              <p>
                                  Through 8 months of iterative research and design, we augmented DSL’s student loan application to close this “resource gap.” By making existing resources more accessible to parents and students alike, our solution helps borrowers regain a sense of agency and make confident loan decisions.
                              </p>
                          </div>
                      </div>
                      <div className="row">
                          <NavLink className="nav-link" to={appRoutes.problem}>
                              <button type={"button"} className={"blob-btn button--orange"}><h4>Design Process</h4>
                                  <span className="blob-btn__inner">
                                          <span className="blob-btn__blobs">
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                          </span>
                                      </span>
                              </button>
                          </NavLink>
                      </div>
                  </div>
                  <div className="phase no-shadow">
                      <span><h2><span className={"tooltips"}>Meet the Team
                          <Tooltip content={TooltipList[0]}/>
                      </span></h2></span>

                      <div className="row">
                          <div className="col-12">
                              <img src={ team } alt={ "team" }/>
                          </div>
                      </div>
                      <br/>
                      <div className="row">
                          <div className="col-lg-6 col-md-12">
                              <p>
                                  We are a team of 5 Human-Computer Interaction Masters students from Carnegie Mellon University. For the last 8 months, we’ve been working on a capstone project with Discover Student Loans. Our backgrounds are diverse - some of us are researchers, some are designers, and some are computer scientists. While we each have different strengths, this project gave us the opportunity to wear a lot of different hats and learn from each other. We share the same high-level goal—to learn the process of UX research and design, and build a solution that solves a validated problem.
                              </p>
                              <NavLink className="nav-link" to={appRoutes.about}>
                                <button type={"button"} className={"blob-btn"}> <h4>Meet the team</h4>
                                    <span className="blob-btn__inner">
                                          <span className="blob-btn__blobs">
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                            <span className="blob-btn__blob"></span>
                                          </span>
                                      </span>
                                </button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className="phase no-shadow img--xs">
                      <span><h2> <span className={"tooltips"}>Our Client
                          <Tooltip content={TooltipList[1]}/>
                      </span></h2></span>
                      <div className="row justify-content-center">
                          <div className="col-lg-4 col-md-12">
                              <img src={ client } alt={ "client" }/>
                          </div>
                          <div className="col-lg-1"></div>
                          <div className="col-lg-5 col-md-12">
                              <br/>
                              <h3>DISCOVER STUDENT LOANS</h3>
                              <br/>
                              <p>
                                  Discover Student Loans is the private student loan provider from Discover Bank, a trusted financial institution for 100 years. Discover Bank offers a variety of financial products, including FDIC-insured savings accounts, credit cards, personal loans and student loans.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

};
