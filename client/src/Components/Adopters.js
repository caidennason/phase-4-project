import React, {useContext, useEffect} from 'react'
import { AdoptersContext } from '../Context/AdopterContext'
import AdopterSubmissionForm from './AdopterSubmissionForm'
import AdopterCard from './AdopterCard'

function Adopters(){

    const {adopters, loadAdopters} = useContext(AdoptersContext)

    useEffect(() => {
        loadAdopters()
    }, [])
    console.log(adopters)

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