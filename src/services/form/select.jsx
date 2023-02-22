import { options } from 'joi-browser';
import React from 'react'
const Select = ({name ,label,value,error, ...rest}) => {
    return ( 
        <div className="form-group">
        <lebal htmlFor={name}>{label} </lebal>
        <Select name={name} id={name} {...rest} className="form-control">
        <option value=""/>
           {options.map(option=>(
                <option key={option._id} value={option._id}>
                     {option.name}
                 </option>
           ))}
        </Select>
        {error && <div className="alert alert-danger">{error}</div> }       
    </div>
     );
};
 
export default Select;