import React from 'react';
import { Dice } from './Dice';
import { Popup } from 'semantic-ui-react'

export class DicesSection extends React.Component {

    rollTheDice = () => {
        this.props.rollDice();
    }

    render() {
        return (
            <>
                <Popup content="Click To Roll A Dice" position='left center' trigger={
                    <div className="dices-container">
                        <a href="/#" onClick={this.rollTheDice}>
                            <Dice diceNumber={this.props.dicesValues[0]} />
                            <Dice diceNumber={this.props.dicesValues[1]} />
                        </a>
                    </div>
                }/>
            </>
        )
    }
}