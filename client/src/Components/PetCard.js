import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PetsContext } from '../Context/PetsContext'
import EditPet from './EditPet'

function PetCard({p, p: {id, name, image_url, bio, age}}){

    const {setPets, pets, setPetError} = useContext(PetsContext)

    function deletePets(){
        fetch(`pets/${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setPetError(err.error))
            } else {
                res.json().then((res) => console.log(res))
                handleDeletePet(id)
            }
        })
    }


    function handleDeletePet(id){
        const remainingPets = pets.filter((p) => p.id !== id)
        setPets(remainingPets)
    }

    // // const petRescueName = (p.rescue.name)

    // console.log(p.rescue)

    let petRescueName
    if (p.rescue !== null){
        petRescueName = p.rescue.name
    } else {
        petRescueName = "No rescue yet."
    }

    let adopterName 
    if (p.adopter !== null){
        adopterName = p.adopter.name
    } else {
        adopterName = "No foster yet."
    }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Img src={image_url}/>
                <Card.Text>{bio} {name} is {age} years old.</Card.Text>
                <Card.Text>Rescue: {petRescueName}</Card.Text>
                <Card.Text>Foster: {adopterName}</Card.Text>
                <Button onClick={deletePets}>Delete</Button>
                <EditPet id={id}/>
            </Card>
        </div>
    )
}

export default PetCard