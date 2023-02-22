import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component {
    
    render() { 

        const {onReset , onDelete, onIncrement , onDecrement}=this.props;
        return( 
       <div>

       <button
       onClick={onReset}
       style={{backgroundColor:"blue", padding:"4px 20px", margin:"5px", color:"white"}}
        className="btn btn-blue">Reset</button>
           {this.props.counters.map(counter=>(
           <Counter 
              key={counter.id} 
              onDelete={onDelete} 
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
              />
           ))}
        </div>
        );
    }
}
 
export default Counters;