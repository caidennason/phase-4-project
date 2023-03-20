import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PetsContext } from '../Context/PetsContext'

function PetCard({p: {id, name, image_url, bio, age}}){

    const {setPets, pets, handlePetDelete} = useContext(PetsContext)

    function deletePets(){
        fetch(`pets/${id}`, {
            method: 'DELETE'
        })
        // .then(res => res.json())
        // .then((r) => handleDeletePet(r))
        handleDeletePet(id)
    }

    function handleDeletePet(id){
        const remainingPets = pets.filter((p) => p.id !== id)
        setPets(remainingPets)
    }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Img src={image_url}/>
                <Card.Text>{bio} {name} is {age} years old.</Card.Text>
                <Button onClick={deletePets}>Delete</Button>
            </Card>
        </div>
    )
}

export default PetCard

  // DELETE pets request
    // const deletePets = () => {
    //     fetch(`/pets/${p.id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then((r) => handleDeletePet({r}))
    // }
    // DELETE pets handler
    // const handleDeletePet = (deletedPet) => {
    //     const remainingPets = pets.filter((pet) => pet.id !== deletedPet.id)
    //     setPets(remainingPets)
    // }
    // function handleDeletePet(r){
    //     const remainingPets = pets.filter((pet) => pet.id !== r.id)
    //     setPets(remainingPets)
    //     console.log(remainingPets)
    // }