import React from "react";

export default class Person extends React.Component{

    render() {
        const { name, photo, info } = this.props;
        return (
            <div className="row">
                <img className="col-lg-4 col-md-6 col-sm-12" src={photo} alt={name}/>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <h4>{name}</h4>
                    <p>{info}</p>
                </div>
            </div>
        );
    }
}
