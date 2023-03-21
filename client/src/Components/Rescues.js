import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import RescueCard from './RescueCard'

function Rescues(){

    const {rescues, setRescues, loadRescues, rescueError} = useContext(RescuesContext)

    useEffect(() => {
        loadRescues()
    }, []);

    if (!rescues){
        <div>Is loading...</div>
    }
    console.log(rescues)
    return(
        <div>
            {/* <p>{rescueError}</p> */}
            {rescues.map((r) => {
                return <RescueCard key={r.id} r={r} />
            })}
        </div>
    )
}

export default Rescues