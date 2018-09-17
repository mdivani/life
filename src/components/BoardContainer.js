import React from 'react';
import CellsBoard from './CellsBoard';
import DropDown from './DropDown';
import {BoardContext} from '../boardContext';
import {getRandom2dArray, gameOfLife, empty2dArray} from '../helpers/generateBoard';
import CommandsComponent from './CommandsComponent';

export default class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 32,
            gameBoard: [],
            interval: 50,
            intervalId: ''
        }
    }

    componentDidMount() {
        const gameBoard = getRandom2dArray(this.state.size, this.state.size);
        this.setState({gameBoard}, this.startGame);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.size !== this.state.size) {
            const gameBoard = getRandom2dArray(this.state.size, this.state.size);
            this.setState({gameBoard});
        }
    }

    startGame = () => {
        const intervalId = setInterval(() => {
            const gameBoard = gameOfLife(this.state.gameBoard);
            this.setState({gameBoard});
        }, this.state.interval);
        this.setState({intervalId});
    }

    pauseGame = () => {
        if(this.state.intervalId) {
          clearInterval(this.state.intervalId);  
        }
    }

    clearBoard = () => {
        const clearGameBoard = empty2dArray(this.state.size, this.state.size);
        this.setState({gameBoard: clearGameBoard});
    }

    handleSelectSize = (size) => {
        if(!isNaN(size)) { this.setState({size})}
    }

    render() {
        return (
            <div className='container__board'>
                <BoardContext.Provider value={this.state.gameBoard}>
                    <CommandsComponent
                        startGame={this.startGame}
                        pauseGame={this.pauseGame}
                        clearBoard={this.clearBoard}
                     />
                    <DropDown 
                        selected={this.state.size}
                        handleSelectSize={this.handleSelectSize}
                        />
                    <CellsBoard />
                </BoardContext.Provider>
            </div>
        );
    }
}