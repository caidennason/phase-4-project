import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { AdoptersContext } from '../Context/AdopterContext'

function AdopterCard({a, a: {id, name, bio, location}}){

    const {adopters, setAdopters} = useContext(AdoptersContext)

    const adoptersPets = (a.pets.map((p) => {
        return p.name
    }))

    const deleteAdopter = () => {
        fetch(`/adopters/${id}`, {
            method: "DELETE"
        })
        handleDeleteAdopter(id)
    }

    const handleDeleteAdopter = (id) => {
        const remainingAdopters = adopters.filter((adopter) => adopter.id !== id)
        setAdopters(remainingAdopters)
    }

    return(
        <Card style={{width: '18rem'}}>
            <Card.Title>{name}</Card.Title>
            <Card.Img />
            <Card.Text>{bio} {name} currently lives in {location}.</Card.Text>
            <Card.Text>{name} is fostering {adoptersPets}.</Card.Text> 
            <Button onClick={deleteAdopter}>Delete</Button>
        </Card>
    )
}

export default AdopterCard