import React from 'react';
import './Popup.scss';
import Tabs from '../../Tabs/Tabs.js';
import CardData from "../Card/CardData.js"

import Feature from  "../../../assets/svg/like.svg";
import Photos from "../../../assets/icons/num2.png";
import PhotoZoom from "../../PhotoZoom/PhotoZoom";


class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        };
    }

    test(){
        const id = (this.props.content);
        console.log(CardData()[id].text);
        this.setState({
            data: CardData()[id].text
        })
    }

    render() {
        const list =  CardData()[this.props.content].text;
        return (
            <div className='popup' style={this.props.style}>
                <div className='popup_inner'>
                    <button className='close' onClick={this.props.closePopup}>x</button>
                        <div className="popup_container">
                            <h2> {this.props.text}</h2>
                            <div className="break"></div>
                            <div className="row top">
                                <div className="col-lg-6 col-md-12 col-sm-12">

                                    <div className="text">
                                        <b>Overview: </b>
                                        { CardData()[this.props.content].overview }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                        <PhotoZoom src={ CardData()[this.props.content].url }
                                             alt={ CardData()[this.props.content].title}/>
                                </div>
                            </div>
                            <div style={{'clear':'both', 'height' : '40px'}}></div>
                            <div className="row">
                                <div className="bottom col-12">
                                    <h5>Pros & Cons</h5>
                                    <ul className="text">
                                        {list.map ((content, index) => {
                                            return (<li key={index}> {content} </li>);
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}


export default Popup;
