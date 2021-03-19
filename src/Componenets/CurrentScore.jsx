import React from 'react';

export class CurrentScore extends React.Component {

    holdPlayerScore = (e) => {
        this.props.holdScore(e);
    }

    render() {
        return (
            <>
                <div className="current-score-box" onClick={this.holdPlayerScore}>
                    <h3>Current</h3>
                    <h2>{this.props.currentScore}</h2>
                </div>
            </>
        )
    }
}