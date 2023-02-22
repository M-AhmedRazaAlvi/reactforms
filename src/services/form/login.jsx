import React from 'react';
import joi from "joi-browser"; 
import Form from './form';

class Login extends Form {
 state={ 
    data: { username:"",password :"" },
    errors: {}
};

schema ={
    username:joi.string().required().label("Username"),
    password:joi.string().required().label("Password"),
};


doSubmit=()=>{
    console.log( "submitted");

}

    render() { 
        return (
            <div className='col-5 flex  '>
             <h1> Login</h1>
            <form onSubmit={this.handleSubmit}>
                <br />
                   {this.renderInput("username","Username")}
                   {this.renderInput("password","Password", "password")}
                   {this.renderButton("Login")}
            </form>
            </div>
        );
    }
}
 
export default Login;