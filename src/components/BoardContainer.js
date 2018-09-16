import React from 'react';
import CellsBoard from './CellsBoard';
import DropDown from './DropDown';
import {BoardContext} from '../boardContext';
import {getRandom2dArray} from '../helpers/generateBoard';

export default class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 32
        }
    }

    handleSelectSize = (size) => {
        if(!isNaN(size)) { this.setState({size})}
    }

    render() {
        return (
            <div className='container__board'>
                <DropDown 
                    selected={this.state.size}
                    handleSelectSize={this.handleSelectSize}
                    />
                <BoardContext.Provider value={getRandom2dArray(this.state.size, this.state.size)}>
                    <CellsBoard size={this.state.size} />
                </BoardContext.Provider>
            </div>
        );
    }
}