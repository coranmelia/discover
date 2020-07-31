import React from "react";
// import ResearchTitleList from "../../components/ResearchBar/PageList";
import TeamInfo from "./TeamInfo";
import "./About.scss"
import Person from "./Person";
import Team from "../../assets/imgs/team.jpg";
import Team_md from "../../assets/imgs/team-md.jpg";
import Team_sm from "../../assets/imgs/team-sm.jpg";

export default class AboutUs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: TeamInfo
        }
    }
render() {

    const { list } = this.state;
        return(
            <div className="research about">
                <div className="BannerImage">
                    <img style={{ width: "100%" }} src={Team_sm} srcSet={`${Team_sm} 576w, ${Team_md} 768w, ${Team} 1200w`} alt="crew" />
                </div>
                <div className="Banner container">
                    <div className="BannerTextContainer">
                        <h1 className="BannerText">ABOUT US</h1>
                        <div className="break"></div>
                    </div>

                </div>
                <br/>

                <div className="container">

                    <div className="phase">
                        <h2>The Team </h2>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <p>
                                    We are the class of 2020 MHCI Discover team at Carnegie Mellon University!
                                    Our members came from a variety of backgrounds range from Visual Design
                                    to Applied Psychological Research to Software Development and we get together
                                    to redesign the student loan experience at Discover Student Loans through
                                    Human-Computer Interaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <br/>


                    {list.map((person) => {
                        return (
                            <Person
                                id={person.id}
                                key={person.id}
                                name={person.name}
                                role={person.role}
                                photo={person.photo}
                                info={person.info}/>
                        )
                    })}
                </div>
                <div className="container-fluid bg-dark-green">
                    <div className="container">
                        <div className="row justify-content-center">
                            <span><h2>Acknowledgements</h2></span>
                            <div className="col-lg-10">
                                <p>
                                    This year, the COVID-19 pandemic started 2 months after the beginning of our capstone project.
                                    Ever since then, we had to work remotely, and it was not an easy time for us.
                                    We had to adapt to a variety of "remote" tools that certainly cannot replace human-to-human interactions.
                                    We faced lots of challenges and stresses.
                                    I'm glad that we still made it through and produced a satisfactory outcome.
                                </p>
                                <br/>
                                <p>
                                    We'd like to give special thanks to Derek Wahila & Jason Spector, our faculty advisors, and Skip Shelly,
                                    our program director. This work could not have been completed without their support.
                                </p>
                                <br/>
                                <p>
                                    I would like to give special thanks to Stacy Kellner, who designed the awesome "Interview the interviewers"
                                    activity for our team. Our <span className={"tooltips"}>team memory tooltips</span> which added lots of warmth to
                                    the website credits to her hard work!
                                </p>
                                <br/>
                                <p>
                                    Design & development of this website credit to Cora Wang. Please feel free to contact for questions or concerns.
                                </p>
                                <br/>
                                <p>
                                    And lastly, thank you for visiting our website :)
                                </p>
                                {/*<p className={"text-right"}> — Cora</p>*/}
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
