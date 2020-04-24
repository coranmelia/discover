import React from "react";
import Card from "./Card/Card.js"
import CardData from "./Card/CardData.js"
import "./Cards.scss";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: 2,
            position: 2,
            cardStyle: {
                transform: 'translateX(0px)'
            },
            width: 0,
        };
    }

    componentDidMount() {
        let boxWidth = document.getElementById("card").clientWidth;
        this.setState({ width: boxWidth });
    }

    // func: click the slider buttons
    handleClick(type) {
        // get the card's margin-right
        let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
        margin = JSON.parse(margin.replace(/px/i, ''));
        const cardWidth = this.state.width; // the card's width
        const cardMargin = margin; // the card's margin
        const cardNumber = CardData().length; // the number of cards
        let currentCard = this.state.currentCard; // the index of the current card
        let position = this.state.position; // the position of the cards
        const wind = window.innerWidth;
        // console.log(window.innerWidth);

        if(wind > 1599) {
            // slide cards
            if (type === 'next' && currentCard < cardNumber - 2) {
                currentCard++;
                position -= (cardWidth + cardMargin);
            } else if (type === 'prev' && currentCard > 2) {
                currentCard--;
                position += (cardWidth + cardMargin);
            }
        }
        else if(wind > 1199) {
            // slide cards
            if (type === 'next' && currentCard < cardNumber - 1) {
                currentCard++;
                position -= (cardWidth + cardMargin);
            } else if (type === 'prev' && currentCard > 2) {
                currentCard--;
                position += (cardWidth + cardMargin);
            }
        } else if (wind > 991) {
            // slide cards
            if (type === 'next' && currentCard < cardNumber - 1) {
                currentCard++;
                position -= (cardWidth + cardMargin);
            } else if (type === 'prev' && currentCard > 2) {
                currentCard--;
                position += (cardWidth + cardMargin);
            }
        } else if (wind > 767) {
            // slide cards
            if (type === 'next' && currentCard < cardNumber) {
                currentCard++;
                position -= (cardWidth + cardMargin);
            } else if (type === 'prev' && currentCard > 2) {
                currentCard--;
                position += (cardWidth + cardMargin);
            }
        } else {
            // slide cards
            if (type === 'next' && currentCard < cardNumber+1) {
                currentCard++;
                position -= (cardWidth + cardMargin);
            } else if (type === 'prev' && currentCard > 2) {
                currentCard--;
                position += (cardWidth + cardMargin);
            }
        }
        this.setCard(currentCard, position);
    }

    setCard(currentCard, position) {
        this.setState({
            currentCard: currentCard,
            position: position,
            cardStyle: {
                transform: `translateX(${position}px)`
            }
        })
    }

    render() {
        return (
            <div className="cards">
                <div className="slider-btns">
                    <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}><span></span></button>
                    <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}><span></span></button>
                </div>

                <div className="pagetitle">
                    <div className="pagetitle-text">
                        <div className="bar"></div>
                        <h1>Some Insights for Your Next Visit</h1>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="cardWrapper">
                    <Card cardStyle={this.state.cardStyle} />
                </div>
            </div>
        )
    }
}

export default Cards;
