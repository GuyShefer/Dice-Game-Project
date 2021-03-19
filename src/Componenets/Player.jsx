import React from 'react';

export class Player extends React.Component {
    state = {}

    render(){
        return (
            <>
                <div className="player-box" style={{background : this.props.back}}>
                    <h2>Player{this.props.playerName}</h2>
                    <h2>{this.props.playerTotalScore}</h2>
                </div>
            </>
        )
    }
}