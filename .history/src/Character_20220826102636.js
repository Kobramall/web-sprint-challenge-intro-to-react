import React from "react"

export default (props) => {
    console.log(props);
    function attr(){
  
    };
  
      return(
          <div>
              <h1>{props.name}<span><button></button></span></h1>
              <div className="attr">
               <p>gender: {props.gender}</p>
               <p>Height: {props.height}</p>
               <p>Mass: {props.mass}</p>
               <p>BirthYear: {props.birth_year}</p>
              </div>
          </div>
      )
  }