import React from 'react'
import Character from './Character';


export default (props)=>{
    const { warsData } = props;
    
    


return(
    <div className='character container'>
        {warsData.map(fr => {
            return <Character warsData={fr} key={fr.id} />})}
    </div>
)
        }