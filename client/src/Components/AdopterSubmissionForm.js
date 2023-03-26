import React, { useState, useContext } from 'react'
import { AdoptersContext } from '../Context/AdopterContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AdopterSubmissionForm(){

    const { submitAdopters, adopterError } = useContext(AdoptersContext)

    //State 
    const [adopterName, setAdopterName] = useState('')
    const [adopterLocation, setAdopterLocation] = useState('')
    const [adopterBio, setAdopterBio] = useState('')
    const [adopterImageUrl, setAdopterImageUrl] = useState('')

    const handleAdopterNameChange = (e) =>{
        setAdopterName(e.target.value)
    }
    const handleAdopterLocationChange = (e) =>{
        setAdopterLocation(e.target.value)
    }
    const handleAdopterBioChange = (e) =>{
        setAdopterBio(e.target.value)
    }
    const handleAdopterImageUrlChange = (e) =>{
        setAdopterImageUrl(e.target.value)
    }

    // POST Adopter
    const handleAdopterSubmit = (e) => {
        e.preventDefault()
        submitAdopters({name: adopterName, bio: adopterBio, location: adopterLocation, image_url: adopterImageUrl})
        setAdopterName('')
        setAdopterBio('')
        setAdopterLocation('')
        setAdopterImageUrl('')
    }
    console.log(adopterError)
    return(
        <div>
            <p>{adopterError ? adopterError : ''}</p>
            <Form onSubmit={handleAdopterSubmit}>
                <input
                type="text"
                placeholder="Adopter name"
                value={adopterName}
                onChange={handleAdopterNameChange}
                />
                <input 
                type="text"
                placeholder="Adopter bio"
                value={adopterBio}
                onChange={handleAdopterBioChange}
                />
                <input 
                type="text"
                placeholder="Adopter location"
                value={adopterLocation}
                onChange={handleAdopterLocationChange}
                />
                <input 
                type="text"
                placeholder="Adopter image URL"
                value={adopterImageUrl}
                onChange={handleAdopterImageUrlChange}
                />
                <Button size="sm" variant="dark" style={{color:"peachpuff"}}type="submit">Submit</Button>
            </Form>

        </div>
    )
}

export default AdopterSubmissionForm