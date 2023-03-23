import React, {useContext} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import RescueLoginForm from './RescueLoginForm'

function Home(){

 
    const {currentRescue} = useContext(RescuesContext)
    console.log(currentRescue)

    let loggedInStatus
    if (currentRescue){
        loggedInStatus = `Welcome, ${currentRescue.name}!`
    } else {
        loggedInStatus = 'Make sure to login, or sign up if you haven\'t already!'
    }

    return(
        <div>
            <h2>{loggedInStatus}</h2>
            <p>Welcome to Foster Adopter! Foster Adopter lets you, the rescue, keep track of which animals have been adopted, and by who. You can create a rescue, foster and adopter, and assign a foster to a rescue or adopter. You can also update the information of the dogs.</p>
            {currentRescue ? <></> : <RescueLoginForm /> }
        </div>
    )
}

export default Home