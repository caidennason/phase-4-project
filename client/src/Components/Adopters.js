import React, {useContext, useEffect} from 'react'
import { AdoptersContext } from '../Context/AdopterContext'
import AdopterSubmissionForm from './AdopterSubmissionForm'
import AdopterCard from './AdopterCard'

function Adopters(){

    const {adopters, setAdopters, loadAdopters} = useContext(AdoptersContext)

    useEffect(() => {
        loadAdopters()
    }, [])
    console.log(adopters)

    return(
        <div>
            {adopters.map((a) => {
                return <AdopterCard key={a.id} a={a}/>
            })}
            <AdopterSubmissionForm />
        </div>
    )
}

export default Adopters