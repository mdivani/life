import React, {Component} from 'react';
import CellItem from './CellItem';

export default class CellsBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsArray: undefined
        }
    }

    componentDidMount() {
        const size = this.props.size || 32;
        const array = [];
        for(let i = 0; i < size; i++) {
            const subArray = [];
            for(let k = 0; k < size; k++) {
                subArray[k] = CellItem;
            }
            array[i] = subArray;
        }

        this.setState({itemsArray: array});
    }

    render() {
        return (
            <div className='board'>
                {
                    this.state.itemsArray && this.state.itemsArray.map((array, arrIndex) => {
                        return <div className='board__row'> {
                            array && array.map((Item, index) => <Item />)
                        }
                        </div>
                    })
                }
            </div>
        );
    }
} 

