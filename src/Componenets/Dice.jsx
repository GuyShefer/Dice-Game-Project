import React from 'react';

export class Dice extends React.Component {

    render() {
        const diceUrl = `https://github.com/pini85/dice-game-starter-pack/blob/master/dice-${this.props.diceNumber}.png?raw=true`;
        return (
            <>
                <div className="dice" style={{ background: `url('${diceUrl}') center center/cover` }}></div>
            </>
        )
    }

}
