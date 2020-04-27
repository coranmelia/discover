import React from "react";

export default class Person extends React.Component{

    render() {
        const { name, photo, info } = this.props;
        return (
            <div className="row person">
                <img className="col-lg-3 col-md-5 col-sm-12" src={photo} alt={name}/>
                <div className="col-lg-9 col-md-7 col-sm-12">
                    <div className="padder"></div>
                    <h3  className="col-lg-9 col-md-12 col-sm-12">{name}</h3>
                    <p className="col-lg-9 col-md-12 col-sm-12">{info}</p>
                </div>
            </div>
        );
    }
}
