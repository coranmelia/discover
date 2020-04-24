import React from "react";
import CardData from "./CardData.js"
import Popup from '../Popup/Popup.js';
import ReactSVG from "react-svg";
import like from "../../../icon/svg/like.svg";

class Card extends React.Component {

    constructor(props){
        super(props);

        let likes = [0,0,0,0,0,0];
        if(localStorage.getItem('likeArray')){
            likes = JSON.parse(localStorage.getItem('likeArray'));
        }else{
            localStorage.setItem('likeArray',  JSON.stringify(likes));
        }

        this.state = {
            showPopup: false,
            cheight: 0,
            cardId:0,
            popStyle: {
                top: '0'
            },
            likes: likes
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    // show card functions
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.setState(() =>{
            return {likes: JSON.parse(localStorage.getItem('likeArray'))}
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);

    }

    updateWindowDimensions() {
        this.setState({ cheight: window.innerHeight });
        // console.log(window.innerHeight);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    showCard(card, idx){
        this.togglePopup.bind(this);
        const title = CardData()[idx].title;
        this.setState({
            cardId:idx,
            showPopup: true,
            title: title,
        });
        // console.log(card);
        this.setHeight();
    }

    setHeight(){
        this.updateWindowDimensions();
        let height = this.state.cheight;
        // console.log("current height is: " +height);
        height *= 2;
        this.setState({
            popStyle: {
                top: height + 'px'
            }
        });
    }

    // Implement picture like system
    handleIncrement = (id) => {
        // extract the id array, get the id element and increment by 1
        // then put it back into the array, store the array in state
        let likeArr = this.state.likes;
        if(likeArr[id] != null) {
            likeArr[id] = parseInt(likeArr[id]) + 1;
        }else{
            likeArr[id] = 1;
        }

        // store in storage
        this.setState({picId: likeArr});

        localStorage.setItem('likeArray', JSON.stringify(this.state.likes));
    };

    svgOnChange = (id) => {
        // increment value of this id in state
        this.handleIncrement(id);
    };


    render() {
        const cardData = CardData();

        return (
            <div>
                {
                    cardData.map((card, i) => {
                        return (
                                <div className="card" id="card" style={this.props.cardStyle} key={i}>
                                    <p className="title">{card.title}</p>
                                    <div href="#">
                                        <img src={card.url}
                                             onClick={() => this.showCard(this, i)}
                                             alt = {card.title}/>
                                    </div>
                                    <ReactSVG src={ like }
                                              className={
                                                            this.state.likes[card.id] !== 0 || this.state.likes[card.id] !== '0'
                                                            ? "svgActive"
                                                            : ""
                                              }></ReactSVG>
                                    <svg  className={
                                        this.state.likes[card.id] != null
                                            ? "svgActive"
                                            : ""
                                    }>
                                        <text x={
                                            this.state.likes[card.id] > 10
                                            ? 7
                                            : 10}
                                              y="20"
                                              fill="white"
                                              id={"t"+card.id}
                                              onClick={()=> this.svgOnChange(card.id)}>
                                            {
                                                this.state.likes[card.id] === null
                                                ? '0'
                                                : this.state.likes[card.id]
                                            }
                                        </text>
                                    </svg>
                                </div>
                        )
                    })
                }

                {
                    this.state.showPopup ?
                        <Popup
                            text={this.state.title}
                            closePopup={this.togglePopup.bind(this)}
                            style={this.state.popStyle}
                            content={this.state.cardId}/>
                        : null
                }
            </div>
        )
    }
}

export default Card;
