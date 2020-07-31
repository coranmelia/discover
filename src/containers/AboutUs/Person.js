import React from "react";

export default class Person extends React.Component{

    render() {
        const { id, name, role, photo, info } = this.props;
        return (
            <div className="row person justify-content-center">
                {
                    (id % 2 === 1)
                        ? ''
                        : <div className="col-lg-3 col-md-2"></div>
                }
                <div className="col-lg-3 col-md-4 col-sm-10">
                    <img src={photo} alt={name}/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="padder"></div>
                    <h3>{name}</h3>
                    <h4>{role}</h4>
                    <p>{info}</p>
                </div>
            </div>
        );
    }
}
