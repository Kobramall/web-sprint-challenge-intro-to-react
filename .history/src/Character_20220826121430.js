import React from "react"
import styled from "styled-components";

export default (props) => {
    const {warsData} = props;

    const StyledDiv = styled.div`
        background-color:${pr => pr.theme.primaryColor}; 
        color: "blue";  
        width:50%;
        display:flex;
        align-items:center:
    `
  
      return(
          <StyledDiv>
                 <h3>{props.warsData.name}<span><button>Info</button></span></h3>
                 <div className="attr">
                    <p>gender: {props.warsData.gender}</p>
                    <p>Height: {props.warsData.height}</p>
                    <p>Mass: {props.warsData.mass}</p>
                    <p>BirthYear: {props.warsData.birth_year}</p>
                 </div>
          </StyledDiv>
      )
  }