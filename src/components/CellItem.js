import React from 'react';

export default class CellItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellClass: ''
        }
    }

    componentDidMount() {
        //if cell is alive on start show with selected color,
        //else default color will be selected
        if(this.props.alive) { this.setState({cellClass: 'cell-item--selected'}) }
    }

    componentDidUpdate(prevProps, prevState) {
        //updated if only state value has changed
        if(this.props.alive !== prevProps.alive ||
           (this.props.alive && prevState.cellClass === 'cell-item--selected')) {
            //check if alive
            if(this.props.alive) {
                //if cell is alive longer then 1 generation apply different color
            const cellClass = prevState.cellClass === 'cell-item--selected' ? 'cell-item--alive' : 'cell-item--selected';
            this.setState({cellClass});
            } 
            //if not alive show with default color
            else {
                this.setState({cellClass: ''})
            }
        }
    }

    render() {
        return (
            <div className={`cell-item ${this.state.cellClass}`}></div>
        )
    }
}

CellItem.defaultProps = {
    alive: false
}