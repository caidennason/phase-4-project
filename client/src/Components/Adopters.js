import React, {useContext, useEffect} from 'react'
import { AdoptersContext } from '../Context/AdopterContext'

function Adopters(){

    const {adopters, setAdopters, loadAdopters} = useContext(AdoptersContext)

    useEffect(() => {
        loadAdopters()
    }, [])

    return(
        <div>
       
        </div>
    )
}

export default Adopters