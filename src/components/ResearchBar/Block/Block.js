import React, { Component } from 'react';

export default class Block extends Component{
    _getActiveBlock() {
        const {isActive} = this.props;
        return 'col ' + (isActive? 'active' : 'default');
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {}

    render() {
        const { idx, title, panelStyle } = this.props;
        return (
            <div className="bar" style={panelStyle} >
                <div className={this._getActiveBlock()}>
                    <h1> {idx} </h1>
                    <p> {title} </p>
                    {/*{this.props.isActive ? '1111' : null}*/}
                </div>
            </div>
        )
    }
}
