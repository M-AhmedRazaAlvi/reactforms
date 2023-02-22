import React from 'react'
const Input = ({type,  name ,label,value,error, onChange}) => {
    return ( 
        <div className="form-group">
        <lebal htmlFor={name}>{label} </lebal>
        <input value={value} 
                onChange={onChange} 
                id={name} 
                name={name}
                type={type} 
                className="form-control" />
        {error && <div className="alert alert-danger">{error}</div> }       
    </div>
     );
};
 
export default Input;