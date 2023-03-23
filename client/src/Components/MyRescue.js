import React, {useContext} from 'react'
import { RescuesContext } from '../Context/RescueContext'
import Figure from 'react-bootstrap/Figure'

function MyRescue(){

    const {currentRescue} = useContext(RescuesContext)


    return(
        <>
        Rescue Profile Incoming
        </>
    )
}

export default MyRescue