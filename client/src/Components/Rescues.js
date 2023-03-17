import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import RescueSubmissionForm from './RescueSubmissionForm';
import RescueCard from './RescueCard'

function Rescues(){

    const {rescues, setRescues, loadRescues} = useContext(RescuesContext)

    useEffect(() => {
        loadRescues()
    }, []);

    return(
        <div>
            <RescueSubmissionForm />
            {rescues.map((r) => {
                return <RescueCard r={r}/>
            })}
        </div>
    )
}

export default Rescues