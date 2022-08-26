import React from 'react'
import Character from './Character';
import styled from "styled-components";


export default (props)=>{
    const { warsData } = props;
     console.log(Character)


    const StyledChar = styled.div`
        display:flex;
        flex-flow: column;
        justify-content:center;

    `


return(
    <StyledChar className='character container'>
        {warsData.map(fr => {
            return <Character warsData={fr} key={fr.id} />})}
    </StyledChar>
)
        }