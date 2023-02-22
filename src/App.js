import React, { Component } from "react";
import './App.css';
// import Counters from "./componets/counters";
// import NavBar from './componets/navbar';
import { Route, Redirect, Switch } from "react-router-dom";
import MovieList from "./services/moviesList";
import Customers from './services/routes/customer';
import NotFound from './routing/rcomponet/notfound';
import Rentals from "./services/routes/rentals";
import VidlyNavbar from './services/routes/vidlynavbar';
import Login from './services/form/login';
import Register from './services/form/registerfrom';

class App extends Component {

  state = {  
    counters:[
        {id:"1", value:"0"},
        {id:"2", value:"0"},
        {id:"3", value:"0"},
        {id:"4", value:"0"}
    ]
   } ;

handleIncrement = counter =>{
    const counters= [...this.state.counters];
    const index =counters.indexOf(counter);
    counters[index]={...counter} ;  
    counters[index].value++;
    this.setState({ counters });
};

handleDecremenet = counter =>{
  const counters= [...this.state.counters];
  const index =counters.indexOf(counter);
  counters[index]={...counter} ;  
  counters[index].value--;
  this.setState({ counters });
};

handleDelete = counterId =>{
    const counters= this.state.counters.filter(c=>c.id !==counterId);
    this.setState({counters});

};
handleReset =()=>{
  const counters=  this.state.counters.map(
    c=>{c.value=0;
    return c;
     });
    this.setState({counters});
};

  render(){
    return (

      ///////////////////////// Counter with Movies list 
      // <React.Fragment>
      //  <NavBar totalCounters={this.state.counters.filter(c =>c.value>0).length} />
      //  <main className="contanier" style={{marginLeft:"100px"}}>
      //    <Counters 
      //    counters={this.state.counters}
      //    onReset ={this.handleReset}
      //    onIncrement={this.handleIncrement}
      //    onDecrement={this.handleDecremenet}
      //    onDelete ={this.handleDelete}
      //     />
      //     <hr></hr>
      //     <div className="movies" style={{marginTop:"40px"}}>
      //     <MovieList/>
      //     </div>
      //  </main>
      // </React.Fragment> 
     ////.....................................................///////
     ///////////////   Only Movies list ///////////
     <React.Fragment>
     <VidlyNavbar/>
     <main className="container">
      <Switch>
      <Route path ="/movies" component={MovieList}></Route>
      <Route path ="/customers" component={Customers}></Route>
      <Route path ="/rentals" component={Rentals}></Route>
      <Route path ="/login" component={Login}></Route>
      <Route path ="/register" component={Register}></Route>
      <Route path ="/not-found" component={NotFound}></Route>
      <Redirect from ="/" exact to="/movies" />
      <Redirect  to="/not-found" />
      </Switch>
     </main>
     </React.Fragment>
     );
  }
}

export default App;
