import React, {useContext, useEffect} from 'react'
import { AdoptersContext } from '../Context/AdopterContext'
import AdopterSubmissionForm from './AdopterSubmissionForm'
import AdopterCard from './AdopterCard'
import { RescuesContext } from '../Context/RescueContext'
import { useNavigate } from 'react-router-dom'

function Adopters(){

    const navigate = useNavigate()
    const {adopters, loadAdopters} = useContext(AdoptersContext)
    const {currentRescue} = useContext(RescuesContext)

    useEffect(() => {
        if (!currentRescue){
            navigate('/')
        } else {
            loadAdopters()
        }
    }, [])


    return(
        <div>
            <AdopterSubmissionForm />
            {adopters.map((a) => {
                return <AdopterCard key={a.id} a={a}/>
            })}
        </div>
    )
}

export default Adopters