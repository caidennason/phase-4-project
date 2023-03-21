import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import RescueCard from './RescueCard'

function Rescues(){

    const {rescues, setRescues, loadRescues} = useContext(RescuesContext)

    useEffect(() => {
        loadRescues()
    }, []);

    return(
        <div>
            {rescues.map((r) => {
                // console.log(r.pets.map((p) => p.name))
                return <RescueCard key={r.id} r={r} />
            })}
        </div>
    )
}

export default Rescues