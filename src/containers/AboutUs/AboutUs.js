import React from "react";
import ResearchTitleList from "../../components/ResearchBar/PageList";
import TeamInfo from "./TeamInfo";
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
            <div className="research">
                <div className="BannerImage">
                    <img style={{ width: "100%" }} src={Team} alt="crew" />
                    <p className="IntroText">

                    </p>
                </div>
                <div className="Banner">
                    <div className="BannerTextContainer">
                        <div className="BannerText">Who are we?</div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    {list.map((person) => {
                        return (
                            <Person name={person.name}
                                    photo={person.photo}
                                    info={person.info}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
