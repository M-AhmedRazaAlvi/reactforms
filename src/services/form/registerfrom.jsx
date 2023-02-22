import React from 'react';
import joi from "joi-browser"; 
import Form from './form';

class Register extends Form {
 state={ 
    data: {name:"", email:"", password :""},
    errors: {}
};

schema ={
    name:joi.string().required().label("Name"),
    email:joi.string().required().email().label("Email"),
    password:joi.string().required().min(6).label("Password"),
};


doSubmit=()=>{
    console.log( "submitted");

}

    render() { 
        return (
            <div className='col-5 flex  '>
             <h1> Register</h1>
            <form onSubmit={this.handleSubmit}>
                <br />
                   {this.renderInput("name","Name")}
                   {this.renderInput("email","Email")}
                   {this.renderInput("password","Password", "password")}
                   {this.renderButton("Register")}
            </form>
            </div>
        );
    }
}
 
export default Register;