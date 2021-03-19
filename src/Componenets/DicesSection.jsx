import React from 'react';
import { Dice } from './Dice';

export class DicesSection extends React.Component {

    rollTheDice = () => {
        this.props.rollDice();
    }

    render() {

        return (
            <>
                <div className="dices-container">
                    <a href="/#" onClick={this.rollTheDice}>
                        <Dice diceNumber={this.props.dicesValues[0]} />
                        <Dice diceNumber={this.props.dicesValues[1]} />
                    </a>
                </div>
            </>
        )
    }
}