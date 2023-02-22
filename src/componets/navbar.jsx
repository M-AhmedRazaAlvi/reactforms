import React from "react";
   

const  NavBar = ({totalCounters}) =>{
  return (
    <nav className="navbar navbar-light bg-blue" style={{backgroundColor:"gray" , color:"blue"}} >
      <a className="navbar-brand" href="#" style={{color:"white" , marginLeft:"100px"}}> 
      Navbar{""}
      <span className="" style={{color:"white", marginLeft:"20px",
       backgroundColor:"blue",paddingLeft:"20px" ,paddingRight:"20px" , borderRadius:"5px"}}>
       {totalCounters}</span>
      
      </a>
      
    </nav>
  );
}

export default NavBar;