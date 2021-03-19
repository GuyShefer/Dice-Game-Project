import React from 'react';
import { Popup } from 'semantic-ui-react'

export class CurrentScore extends React.Component {

    holdPlayerScore = (e) => {
        this.props.holdScore(e);
    }

    render() {
        return (
            <>
                <Popup content="Click To Get The Current Points" position='right center' trigger={
                    <div className="current-score-box" onClick={this.holdPlayerScore}>
                        <h3>Current</h3>
                        <h2>{this.props.currentScore}</h2>
                    </div>
                } />
            </>
        )
    }
}