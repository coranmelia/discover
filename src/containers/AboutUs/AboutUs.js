import React from "react";
import ResearchTitleList from "../../components/ResearchBar/PageList";
import TeamInfo from "./TeamInfo";
import "./About.scss"
import Person from "./Person";
import Team from "../../assets/imgs/team.png";

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
                    <img style={{ width: "100%" }} src={Team} alt="crew" />
                </div>
                <div className="Banner">
                    <div className="BannerTextContainer">
                        <div className="BannerText">Who are we?</div>
                        <div className="break"></div>
                    </div>
                    <div className="IntroContainer row">
                        <p className="IntroText">
                            We are the MHCI Discover team!  Our members came from a variety of backgrounds range from
                            Visual Design to Applied Psychological Research to Software Development. We gladly incorporated
                            our different expertise in this project and learned different skills
                            from each other.
                        </p>
                    </div>

                </div>
                <br/>
                <div className="container">
                    {list.map((person, idx) => {
                        return (
                            <Person
                                key={idx}
                                name={person.name}
                                photo={person.photo}
                                info={person.info}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
