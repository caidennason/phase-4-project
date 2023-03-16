import React, {useContext, useEffect} from 'react'
import { AdoptersContext } from '../Context/AdopterContext'

function Adopters(){

    const {adopters, setAdopters, loadAdopters} = useContext(AdoptersContext)

    useEffect(() => {
        loadAdopters()
    }, [])

    return(
        <div>
        {adopters.map((a) => {
            return <li key={a.id}>{a.name} - {a.bio}</li>
        })}
        </div>
    )
}

export default Adopters