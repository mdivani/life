import React from 'react';
import CellsBoard from './CellsBoard';
import DropDown from './DropDown';
import {BoardContext} from '../boardContext';
import {getRandom2dArray, gameOfLife} from '../helpers/generateBoard';

export default class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 32,
            gameBoard: [],
            interval: 50
        }
    }

    componentDidMount() {
        const gameBoard = getRandom2dArray(this.state.size, this.state.size);
        this.setState({gameBoard});
        setInterval(this.startGame,
        this.state.interval);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.size !== this.state.size) {
            const gameBoard = getRandom2dArray(this.state.size, this.state.size);
            this.setState({gameBoard});
        }
    }

    startGame = () => {
        const gameBoard = gameOfLife(this.state.gameBoard);
        this.setState({gameBoard});
    }

    pauseGame = () => {

    }

    handleSelectSize = (size) => {
        if(!isNaN(size)) { this.setState({size})}
    }

    render() {
        return (
            <div className='container__board'>
                <BoardContext.Provider value={this.state.gameBoard}>
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