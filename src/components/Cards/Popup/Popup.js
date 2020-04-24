import React from 'react';
import './Popup.scss';
import Tabs from '../Tabs/Tabs.js';
import CardData from "../Card/CardData.js"
import Photo from "../../Photo/Photo.js"

import Feature from  "../../../icon/svg/view.svg";
import Photos from "../../../icon/svg/photo.svg";


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

        return (
            <div className='popup' style={this.props.style}>
                <div className='popup_inner'>
                    {/*<h1>{this.props.text}</h1>*/}
                    <button className='close' onClick={this.props.closePopup}>X</button>
                    <Tabs>
                        <div label={ Feature } >
                            <div className="left">
                                <h2>Feature </h2>
                                <div className="break"></div>
                                <div className="text">{ CardData()[this.props.content].text } </div>
                            </div>
                            <div className="right">
                                    <img src={ CardData()[this.props.content].url }
                                         alt={ CardData()[this.props.content].title}/>
                            </div>


                        </div>
                        <div label={ Photos } className="photo-wrapper">
                            <div className="left">
                                <h2>Photos </h2>
                                <div className="break"></div>
                            </div>
                            <div className="photo-inner">
                                <Photo source={ CardData()[this.props.content].id }/>
                            </div>
                        </div>

                    </Tabs>
                </div>
            </div>
        );
    }
}


export default Popup;
