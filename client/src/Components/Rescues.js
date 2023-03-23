import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import RescueCard from './RescueCard'
import { useNavigate } from 'react-router-dom'

function Rescues(){

    const navigate = useNavigate()
    const {rescues, loadRescues, rescueError, currentRescue, isLoading} = useContext(RescuesContext)

    console.log(currentRescue)

    useEffect(() => {
        if (!currentRescue && !isLoading){
            navigate('/')
        } else {
            loadRescues()
        }
    }, [currentRescue, isLoading]);

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