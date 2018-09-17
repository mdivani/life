import React from 'react';
import CellItem from './CellItem';
import {BoardContext} from '../boardContext';

const CellsBoard = () => (
    <div className='board'>
        <BoardContext.Consumer>
        { ({board, handleSelectCell, paused}) => board.map((row, index) => {
            return <div key={index} className='board__row'>
                    {
                      row.map((item, itemIndex) => <CellItem 
                                                        paused={paused}
                                                        handleSelectCell={handleSelectCell}
                                                        coordX={index}
                                                        coordY={itemIndex}
                                                        key={itemIndex} 
                                                        alive={item}/>)
                    }
                   </div>
        })
        }
        </BoardContext.Consumer>
    </div>
);

export default CellsBoard;

