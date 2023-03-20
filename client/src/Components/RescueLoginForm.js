import React, {useContext, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RescuesContext } from '../Context/RescueContext'

function RescueLoginForm(){

    // Context
    const { submitRescues } = useContext(RescuesContext)

    // State
    const [rescueName, setRescueName] = useState('Rescue Name')
    const [rescueBio, setRescueBio] = useState('Rescue Bio')
    const [rescueLocation, setRescueLocation] = useState('Rescue Location')
    const [rescueImageUrl, setRescueImageUrl] = useState('Rescue Image URL')
    const [rescuePassword, setRescuePassword] = useState('Password')

    const handleRescueNameChange = (e) => {
        setRescueName(e.target.value)
    };

    const handleRescueBioChange = (e) => {
        setRescueBio(e.target.value)
    }

    const handleRescueLocationChange = (e) => {
        setRescueLocation(e.target.value)
    }

    const handleRescueImageUrlChange = (e) => {
        setRescueImageUrl(e.target.value)
    }

    const handleRescuePasswordChange = (e) => {
        setRescuePassword(e.target.value)
    }

    // POST Rescue
    const handleRescueSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted!')
        submitRescues({name: rescueName, bio: rescueBio, location: rescueLocation, image_url: rescueImageUrl, password: rescuePassword})
    };

    return(
        <div>
            <Form onSubmit={handleRescueSubmit}>
                <input
                type="text"
                value={rescueName}
                onChange={handleRescueNameChange}
                />
                <input
                type="text"
                value={rescueBio}
                onChange={handleRescueBioChange}
                />
                <input
                type="text"
                value={rescueLocation}
                onChange={handleRescueLocationChange}
                />
                <input
                type="text"
                value={rescueImageUrl}
                onChange={handleRescueImageUrlChange}
                />
                <input
                type="text"
                value={rescuePassword}
                onChange={handleRescuePasswordChange}
                />
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default RescueLoginForm