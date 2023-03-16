import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { PetsContext, submitPets } from '../Context/PetsContext'
import Button from 'react-bootstrap/Button'

function Pets(){

    // Context
    const { pets, setPets, loadPets} = useContext(PetsContext)

    useEffect(() => {
        loadPets()
    }, []);

    const {submitPets} = useContext(PetsContext)
    //

    // State
    const [petName, setPetName] = useState('Pet\'s Name')
    const [petBio, setPetBio] = useState('Pet\'s Bio')
    const [petAge, setPetAge] = useState('Pet\'s Age - Integer only') // add error here if it's not

    const handlePetNameChange = (e) => {
        setPetName(e.target.value)
        console.log(e.target.value)
    }
    const handlePetBioChange = (e) => {
        setPetBio(e.target.value)
        console.log(e.target.value)
    }
    const handlePetAgeChange = (e) => {
        setPetAge(e.target.value)
        console.log(e.target.value)
    }

    // YOU CAN PASS PETS AS A PROP!! NOT PROP DRILLING!!

    return (
        <div>
            {pets.map((p) => {
                return <li key={p.id}>{p.bio} {p.name} is {p.age}.</li>
            })}
            <Form onSubmit={() => console.log('Submitted')}>
                <input 
                type="text"
                value={petName}
                onChange={handlePetNameChange}
                />
                <input 
                type="text"
                value={petBio}
                onChange={handlePetBioChange}
                />
                <input
                type="text"
                value={petAge}
                onChange={handlePetAgeChange}
                />
            <button type="submit">Submit</button>

            </Form>
            <Button></Button>
        </div>
    )

}

export default Pets