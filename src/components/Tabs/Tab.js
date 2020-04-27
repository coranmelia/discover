import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg'



class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {

        const {
            onClick,
            props: {
                activeTab,
                label,
                title
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={ className }
                onClick={ onClick }
            >
                <h4>{title}</h4>
                {/*<img src={label}/>*/}
            </li>
        );
    }
}


export default Tab;
