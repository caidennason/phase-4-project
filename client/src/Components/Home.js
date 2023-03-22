import React from 'react'
import RescueLoginForm from './RescueLoginForm'

function Home({currentRescue}){

    console.log(currentRescue)

    return(
        <div>
            <p>welcome</p>
            <p>Welcome to Foster Adopter! Foster Adopter lets you, the rescue, keep track of which animals have been adopted, and by who. You can create a rescue, foster and adopter, and assign a foster to a rescue or adopter. You can also update the information of the dogs.</p>
            <RescueLoginForm />
        </div>
    )
}

export default Home