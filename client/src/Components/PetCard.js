import React, {useState, useContext, useEffect} from 'react'
import Pets from './Pets'

function PetCard({p}){

    return(
        <div>
            <li>{p.name}</li>
        </div>
    )
}

export default PetCard