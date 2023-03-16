import React, {useContext, useState, useEffect} from 'react'
import { AdoptersContext } from '../Context/AdopterContext'

function Adopters(){

    const {adopters, setAdopters, loadAdopters} = useContext(AdoptersContext)

    useEffect(() => {
        loadAdopters()
    }, [])

    console.log('ayoooo:', adopters)

    return(
        <div>
        {adopters.map((a) => {
            return <li>{a.name} - {a.bio}</li>
        })}
        </div>
    )
}

export default Adopters