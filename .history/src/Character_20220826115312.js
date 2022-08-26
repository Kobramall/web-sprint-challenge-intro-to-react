import React from "react"
import styled from "styled-components";

export default (props) => {
    const {warsData} = props;

    const StyledDiv = styled.div`
        display:flex;
        flex-flow: row | wrap;
        justify-content: center;
        background-color:${pr => pr.theme.primaryColor}; 
        color: "blue";  
        width:50% 
    `
  
      return(
          <StyledDiv>
              <div className = "characterHeader">
                 <h3>{props.warsData.name}<span><button>Info</button></span></h3>
              </div>
              <div className="attr">
                 <p>gender: {props.warsData.gender}</p>
                 <p>Height: {props.warsData.height}</p>
                 <p>Mass: {props.warsData.mass}</p>
                 <p>BirthYear: {props.warsData.birth_year}</p>
              </div>
          </StyledDiv>
      )
  }