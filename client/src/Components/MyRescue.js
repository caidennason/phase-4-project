import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import Figure from 'react-bootstrap/Figure'

function MyRescue(){

    const {currentRescue, isLoading, setIsLoading} = useContext(RescuesContext)

    console.log(currentRescue)
    let rescuePets
    if (currentRescue){
    rescuePets = <Figure>
    <Figure.Image src={currentRescue.image_url}/>
    <h3>{currentRescue.name}</h3>
    <h5>{currentRescue.bio}</h5>
    <p>{currentRescue.pets.length !=0 ? `${currentRescue.name} currently has ${currentRescue.pets.map((p) => p.name).join(', ')}. Find out more about them at pets!` : "No pets ... yet."}</p>
    <p>{currentRescue.name} is located in {currentRescue.location}.</p>
    </Figure> } else {
        rescuePets = <div>Loading...</div>
    }

    return(
        <>
        <br></br>
        {rescuePets}
        </>
    )
}

export default MyRescue