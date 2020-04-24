import React, { Component } from 'react';
import ResearchTitleList from "./PageList";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './ResearchBar.scss'
import Block from "./Block/Block";

export default class ResearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeElement: 2,
            list: ResearchTitleList
        }
    }
    componentDidMount() {
        if (this.props.activeElement)
            this.setState({activeElement:  this.props.activeElement});
    }
    _onSectionSelect(idx) {
        this.setState({activeElement: idx})
    }
    render() {
        let { list, activeElement } = this.state;
        return (
            <div className="research_container">
                <div className="row">
                    {list.map((title) => {
                            return (
                                <Link
                                    key={title.id}
                                    to={title.id === 1 || title.id === 5 ?
                                        title.id === 1 ? `${appRoutes.problem}` : `${appRoutes.solution}`
                                        : `${appRoutes.problem}/${title.url}`}>
                                    <Block key={title.id}
                                           isActive={title.id === activeElement}
                                           onSelect={this._onSectionSelect.bind(this)}
                                           idx={title.id}
                                           title={title.name}/>
                                </Link>)
                        }
                    )}
                </div>
            </div>
        )
    }
}
