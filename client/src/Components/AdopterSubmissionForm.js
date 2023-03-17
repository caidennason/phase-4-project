import React, { useState, useContext } from 'react'
import { AdoptersContext } from '../Context/AdopterContext'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AdopterSubmissionForm(){

    const { submitAdopters } = useContext(AdoptersContext)

    //State 
    const [adopterName, setAdopterName] = useState('Adopter Name')
    const [adopterLocation, setAdopterLocation] = useState('Adopter Location')
    const [adopterBio, setAdopterBio] = useState('Adopter Bio')
    const [adopterImageUrl, setAdopterImageUrl] = useState('Adopter Image URL')

    const handleAdopterNameChange = (e) =>{
        setAdopterName(e.target.value)
        console.log(e.target.value)
    }
    const handleAdopterLocationChange = (e) =>{
        setAdopterLocation(e.target.value)
        console.log(e.target.value)
    }
    const handleAdopterBioChange = (e) =>{
        setAdopterBio(e.target.value)
        console.log(e.target.value)
    }
    const handleAdopterImageUrlChange = (e) =>{
        setAdopterImageUrl(e.target.value)
        console.log(e.target.value)
    }

    // POST Adopter
    const handleAdopterSubmit = (e) => {
        e.preventDefault()
        console.log('submitted!')
        submitAdopters({name: adopterName, bio: adopterBio, location: adopterLocation, image_url: adopterImageUrl})
    }

    return(
        <div>
            <Form onSubmit={handleAdopterSubmit}>
                <input
                type="text"
                value={adopterName}
                onChange={handleAdopterNameChange}
                />
                <input 
                type="text"
                value={adopterBio}
                onChange={handleAdopterBioChange}
                />
                <input 
                type="text"
                value={adopterLocation}
                onChange={handleAdopterLocationChange}
                />
                <input 
                type="text"
                value={adopterImageUrl}
                onChange={handleAdopterImageUrlChange}
                />
                <Button type="submit">Submit</Button>
            </Form>

        </div>
    )
}

export default AdopterSubmissionForm