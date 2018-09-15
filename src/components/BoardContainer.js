import React from 'react';
import CellsBoard from './CellsBoard';

export default class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 32
        }
    }

    render() {
        return (
            <div className='container-board'>
                <CellsBoard />
            </div>
        );
    }
}