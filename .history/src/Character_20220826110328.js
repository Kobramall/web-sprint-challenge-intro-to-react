import React from "react"

export default (props) => {
    
   
  
      return(
          <div>
              <div className = "characterHeader">
                 <h1>{props.warsData.name}<span><button>Info</button></span></h1>
              </div>
              <div className="attr">
                 <p>gender: {props.warsData.gender}</p>
                 <p>Height: {props.warsData.height}</p>
                 <p>Mass: {props.warsData.mass}</p>
                 <p>BirthYear: {props.warsData.birth_year}</p>
              </div>
          </div>
      )
  }