import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import RescueCard from './RescueCard'

function Rescues(){

    const {rescues, loadRescues, rescueError} = useContext(RescuesContext)

    useEffect(() => {
        loadRescues()
    }, []);

    console.log(rescues)
    return(
        <div>
            <p>{rescueError}</p>
            {rescues.map((r) => {
                return <RescueCard key={r.id} r={r} />
            })}
        </div>
    )
}

export default Rescues

 // https://i.imgur.com/fbVf9rh.jpg