import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { AdoptersContext } from '../Context/AdopterContext'

function AdopterCard({a, a: {id, name, bio, location}}){

    const {adopters, setAdopters, setAdopterError} = useContext(AdoptersContext)

    const adoptersPets = (a.pets.map((p) => {
        return p.name
    })).join(', ')

    function deleteAdopter(){
        fetch(`/adopters/${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setAdopterError(err.error))
            } else {
                res.json().then((res) => console.log(res))
                handleDeleteAdopter(id)
                setAdopterError(null)
            }
        })
        // handleDeleteAdopter(id)
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
            <Button size="sm" variant="danger" style={{color:"black"}}onClick={deleteAdopter}>Delete</Button>
        </Card>
    )
}

export default AdopterCard