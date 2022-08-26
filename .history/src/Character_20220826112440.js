import React from "react"

export default (props) => {
    const {warsData} = props;
  
      return(
          <div>
              <div className = "characterHeader">
                 <h3>{props.warsData.name}<span><button></button></span></h3>
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