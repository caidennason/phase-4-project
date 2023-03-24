import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import Figure from 'react-bootstrap/Figure'

function MyRescue(){

    const {currentRescue, isLoading, setIsLoading} = useContext(RescuesContext)

    console.log(currentRescue)
    let hello
    if (currentRescue){
    hello = <Figure>
    <Figure.Image src={currentRescue.image_url}/>
    <h3>{currentRescue.name}</h3>
    <p>{currentRescue.bio}</p>
    <p>{currentRescue.pets.map((p) => p.name).join(', ')}</p>
    </Figure> } else {
        hello = <div>Loading...</div>
    }

    return(
        <>
        {/* {currentRescue ? test : "Loading..."} */}
        {hello}
        </>
    )
}

export default MyRescue