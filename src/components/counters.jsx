import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    
    render() { 
        const {onReset, items, onDelete, onIncrement} = this.props;
        return (
        <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">Reset</button>
        
         {items.map((item) => <Counter key= {item.id}  item = {item}
            onDelete= {onDelete} onIncrement= {onIncrement} />)}   
        </div>);
    }
}
 
export default Counters;