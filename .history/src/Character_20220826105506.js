import React from "react"

export default (props) => {
    function attr(){
  
    };
  
      return(
          <div>
              <h1>{props.name}<span><button></button></span></h1>
              <div className="attr">
               <p>gender: {props.warsData.gender}</p>
               <p>Height: {props.warsData.height}</p>
               <p>Mass: {props.warsData.mass}</p>
               <p>BirthYear: {props.warsData.birth_year}</p>
              </div>
          </div>
      )
  }