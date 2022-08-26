import React from "react"

export default (props) => {
    
   console.log(props.warsData.name);
  
      return(
          <div>
              <div className = "characterHeader">
                 <h3>{props.warsData.name}</h3>
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