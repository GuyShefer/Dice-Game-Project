import React from 'react';
import { Player } from './Player';
import './Game.css';
import { DicesSection } from './DicesSection';
import { CurrentScore } from './CurrentScore';
import 'semantic-ui-css/semantic.min.css'
import WinnerModal from './WinnerModal';
import { Popup } from 'semantic-ui-react'


export class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => {
        return {
            dices: [1, 1],
            currentScore: 0,
            playerTurn: 1,
            pointsToWin: 100,
            modalActive: false,
            players: [
                {
                    playerName: '1',
                    totalScore: 0,
                    background: '#fff'
                },
                {
                    playerName: '2',
                    totalScore: 0,
                    background: '#E6E6E6'
                },
            ]
        }
    }

    restartGame = () => {
        this.setState(this.getInitialState());
    }

    rollTheDice = () => {
        const playersArr = this.state.players;
        let currPlayerTurn = this.state.playerTurn;

        const firstDice = getRandomDice();
        const secondDice = getRandomDice();
        // check if the dices is equals
        if (firstDice === secondDice) {
            const stateToUpdate = this.setTurnToTheNextPlayer(playersArr, currPlayerTurn);
            this.setState({ ...stateToUpdate, dices: [firstDice, secondDice] });

        } else {
            // add to the sum of the dice to the total amount
            const sumDices = firstDice + secondDice + this.state.currentScore;
            this.setState({ dices: [firstDice, secondDice], currentScore: sumDices })
        }
    }

    setHoldPlayerScore = () => {
        // add the current score to the user
        // clear the current score
        const playersArr = this.state.players;
        let currPlayerTurn = this.state.playerTurn;
        playersArr[currPlayerTurn].totalScore += this.state.currentScore;

        // check if the current player won
        if (playersArr[currPlayerTurn].totalScore >= this.state.pointsToWin) {
            this.setState({ modalActive: true })
        }
        else {
            const stateToUpdate = this.setTurnToTheNextPlayer(playersArr, currPlayerTurn);
            this.setState(stateToUpdate);
        }
    }

    setTurnToTheNextPlayer = (playersArr, currentPlayer) => {
        const tempBackgroundColor = playersArr[currentPlayer].background;
        playersArr[currentPlayer].background = '#fff'; // change the background to the current user
        currentPlayer + 1 === playersArr.length ? currentPlayer = 0 : currentPlayer += 1;
        playersArr[currentPlayer].background = tempBackgroundColor; // change the background to the next user
        return { players: playersArr, currentScore: 0, playerTurn: currentPlayer }
    }

    changeWinningScore = (e) => {
        // check if the number is valid (positive)
        // check if both useres with 0 score.
        this.setState({ pointsToWin: e.target.value })
    }

    render() {
        return (
            <>
                <section className="body">
                    <div className="main-board">
                        {this.state.players.map(player => {
                            return <Player key={player.playerName} playerName={player.playerName} playerTotalScore={player.totalScore} back={player.background} /> //key +playername
                        })}
                        <div className="actions">
                            <DicesSection dicesValues={this.state.dices} rollDice={this.rollTheDice} />
                            <CurrentScore currentScore={this.state.currentScore} holdScore={this.setHoldPlayerScore} />
                            <div>
                                <input className="restart" type="button" value="Restart Game" onClick={this.restartGame} />
                            </div>
                            <Popup content="Set The Number Of Points To Win" position='bottom center' trigger={
                                <input className="pointsToWin" type="number" value={this.state.pointsToWin} onChange={this.changeWinningScore} />
                            } />
                            <WinnerModal active={this.state.modalActive} playerWon={this.state.playerTurn} restart={this.restartGame} />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const getRandomDice = () => {
    return Math.floor(Math.random() * 6 + 1);
}

