import React from 'react';
import CellsBoard from './CellsBoard';
import DropDown from './DropDown';
import {BoardContext} from '../boardContext';
import {getRandom2dArray, gameOfLife, empty2dArray, copy2dArray} from '../helpers/generateBoard';
import CommandsComponent from './CommandsComponent';

export default class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 32,
            gameBoard: [],
            interval: 50,
            intervalId: '',
            paused: false,
            generations: 0
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
            const generations = this.state.generations + 1;
            this.setState({gameBoard, paused: false, generations});
        }, this.state.interval);
        this.setState({intervalId});
    }

    pauseGame = () => {
        if(this.state.intervalId) {
          clearInterval(this.state.intervalId);
          this.setState({paused: true});  
        }
    }

    clearBoard = () => {
        const clearGameBoard = empty2dArray(this.state.size, this.state.size);
        this.setState({gameBoard: clearGameBoard, generations: 0}, this.pauseGame);
    }

    handleSelectCell = (coordX, coordY) => {
        const gameBoard = copy2dArray(this.state.gameBoard);
        if(gameBoard.length > 0) {
            gameBoard[coordX][coordY] = !gameBoard[coordX][coordY];
            this.setState({gameBoard});            
        }
    }

    handleSelectSize = (size) => {
        if(!isNaN(size)) { 
            this.setState({size, generations: 0})
        }
    }

    render() {
        return (
            <div className='container__board'>
                <BoardContext.Provider value={
                    {
                    board: this.state.gameBoard,
                    handleSelectCell: this.handleSelectCell,
                    paused: this.state.paused
                }
            }>
                <div className='menu'>
                    <DropDown 
                        selected={this.state.size}
                        handleSelectSize={this.handleSelectSize}
                        />
                    <p className='generations'>Generations: 
                    <span className='generations__count'>{this.state.generations}</span></p>
                    <CommandsComponent
                        startGame={this.startGame}
                        pauseGame={this.pauseGame}
                        clearBoard={this.clearBoard}
                     />
                </div>
                    <CellsBoard />
                </BoardContext.Provider>
            </div>
        );
    }
}