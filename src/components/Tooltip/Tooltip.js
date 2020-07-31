import React from 'react';
import bidisha from "../../assets/teamphoto/animate/bidisha.png"
import aaron from "../../assets/teamphoto/animate/aaron.png"
import cora from "../../assets/teamphoto/animate/cora.png"
import jackie from "../../assets/teamphoto/animate/jackie.png"
import stacy from "../../assets/teamphoto/animate/stacy.png"
import story from "../../assets/imgs/sketch.png";

export default class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
        }
    }
    getAuthorProfile() {
        const id = this.state.content.authorId;
        if (id === 0) {
            return bidisha;
        } else if (id === 1) {
            return aaron;
        } else if (id === 2) {
            return cora;
        } else if (id === 3) {
            return jackie;
        } else {
            return stacy;
        }
    }
    render(){
        const profile = this.getAuthorProfile();
        const { author, tag, text } = this.state.content;
        return (
            <div className={"tooltips-text"}>
                <div className="row justify-content-center tooltips-text--header">
                    <div className="col-3">
                        <img src={profile} alt="profile"/>
                    </div>
                    <div className="col-8">
                        <h5>{author}</h5>
                        <p>#{tag}</p>
                    </div>
                </div>
                <div className="row-cols-11"></div>
                <div className="row justify-content-center tooltips-text--body">
                    <p className={"col-11 no-shadow"}>
                        {
                            text !== null ? text :
                                <img src={ story } alt="fuzziness"/>
                        }
                    </p>
                </div>

            </div>
        )
    }
}
