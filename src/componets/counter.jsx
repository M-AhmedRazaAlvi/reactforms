import React, { Component } from 'react'
class Counter extends Component {

    render() { 
        return (
        <div>
           <div className="row">
            <div className="col-1 mt-2">
               <span style={{ 
                backgroundColor:this.getbadgeColor(),
                color:"white", 
                padding:"4px 20px", 
                margin:"5px", 
                borderRadius:"5px", 
                width:"10px"}} 
                className="">{this.formatcount()}</span>
            </div>
            <div className="col">
            <button 
             onClick={()=> {this.props.onIncrement(this.props.counter);}}
             className='btn btn-secondary btn-sm ' >
                +</button>
             <button 
                 onClick={()=> {this.props.onDecrement(this.props.counter);}}
                 className='btn btn-secondary btn-sm m-2 '
                disabled ={this.props.counter.value===0?"disapled":""}>
                -</button>
                   
            <button className='btn btn-danger btn-sm' 
                onClick={()=>this.props.onDelete(this.props.counter.id)}>
                Delete</button>
            </div>
           </div>
              
        </div>
        );
    }

    getbadgeColor(){
      let classes =(this.props.counter.value===0)? "yellow":"blue";
      return classes

    }
    formatcount(){
        const {value} =this.props.counter;
        return value===0?"zero":value;
    }
}
 
export default Counter;