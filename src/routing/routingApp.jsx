import React, { Component } from "react";
import NavBarR from "./rcomponet/navbarr";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./main/dashboard";
import Posts from "./rcomponet/posts";
import Home from "./rcomponet/home";
import Products from "./rcomponet/products";
import ProductDetails from './rcomponet/productdetails';
import NotFound from './rcomponet/notfound';

class RoutingApp extends Component {
  render(){
    return (
      <div>
      <NavBarR/>
      <div className="content">
           <Switch>
             <Route path="/Products/:id" component={ProductDetails} ></Route>
             <Route path="/products" render={props=> <Products  sortBy=  "Newest"{...props}/>} />
             <Route path="/posts" component={Posts} />
             <Redirect from ="/massages" to="/posts" />
             <Route path="/not-found" component={NotFound} />
             <Route path="/admin" component={Dashboard} />
             <Route path="/" exact component={Home} />
             <Redirect to="/not-found" />
           </Switch>
         </div>
     </div> 
     );
  }
}

export default RoutingApp;
