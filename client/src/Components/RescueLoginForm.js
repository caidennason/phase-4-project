import React, {useContext, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RescuesContext } from '../Context/RescueContext'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'

function RescueLoginForm(){


    const navigate = useNavigate()
    // Context
    const { submitRescues, rescueError } = useContext(RescuesContext)

    // State
    const [rescueName, setRescueName] = useState('')
    const [rescueBio, setRescueBio] = useState('')
    const [rescueLocation, setRescueLocation] = useState('')
    const [rescueImageUrl, setRescueImageUrl] = useState('')
    const [rescuePassword, setRescuePassword] = useState('')
    const [rescuePasswordConfirmation, setRescuePasswordConfirmation] = useState('')

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

    const handleRescuePasswordConfirmationChange = (e) => {
        setRescuePasswordConfirmation(e.target.value)
    }

    // POST Rescue
    const handleRescueSubmit = (e) => {
        e.preventDefault()
        submitRescues({name: rescueName, bio: rescueBio, location: rescueLocation, image_url: rescueImageUrl, password: rescuePassword, password_confirmation: rescuePasswordConfirmation})
    };

    return(
        <div>
            <p style={{color:"red"}}>{rescueError ? rescueError : ''}</p>
            <Form onSubmit={handleRescueSubmit}>
                <Form.Group className="mb-3" controlId="formHorizontalName">
                    <Form.Label column-sm={2}>
                        Sign up here!
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                        name="rescueName" 
                        type="text"
                        placeholder="Rescue Name"
                        onChange={handleRescueNameChange}
                        value={rescueName}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalBio">
                    <Col sm={10}>
                        <Form.Control 
                        type="text" 
                        placeholder="Rescue Bio"
                        onChange={handleRescueBioChange}
                        value={rescueBio}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalLocation">
                    <Col sm={10}>
                        <Form.Control 
                        type="text" 
                        placeholder="Rescue Location"
                        onChange={handleRescueLocationChange}
                        value={rescueLocation}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
                    <Col sm={10}>
                        <Form.Control 
                        type="text" 
                        placeholder="Image Url"
                        onChange={handleRescueImageUrlChange}
                        value={rescueImageUrl}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Col sm={10}>
                        <Form.Control 
                        type="password" 
                        placeholder="Password"
                        onChange={handleRescuePasswordChange}
                        value={rescuePassword}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPasswordConfirmation">
                    <Col sm={10}>
                        <Form.Control
                        type="password" 
                        placeholder="Confirm password"
                        onChange={handleRescuePasswordConfirmationChange}
                        value={rescuePasswordConfirmation}
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" variant='dark' style={{color:'peachpuff'}}>Sign Up!</Button>
            </Form>
        </div>
    )
}

export default RescueLoginForm

{/* <input
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
                <Button type="submit">Sign Up</Button> */}