import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PetsContext } from '../Context/PetsContext'

function PetCard({p}){

    const {setPets, pets} = useContext(PetsContext)

    // DELETE pets request
    const deletePets = () => {
        fetch(`/pets/${p.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then((r) => handleDeletePet(r))
    }
    // DELETE pets handler
    const handleDeletePet = (deletedPet) => {
        const remainingPets = pets.filter((pet) => pet.id !== deletedPet.id)
        setPets(remainingPets)
    }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Title className='text-center'>{p.name}</Card.Title>
                <Card.Img src={p.image_url}/>
                <Card.Text>{p.bio} {p.name} is {p.age} years old.</Card.Text>
                {/* <Button onClick={() => handleDeletePet({p})}>Delete</Button> */}
                <Button onClick={deletePets}>Delete</Button>
            </Card>
        </div>
    )
}

export default PetCard