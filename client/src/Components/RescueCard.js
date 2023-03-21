import React, { useContext } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { RescuesContext } from "../Context/RescueContext"
import ListGroup from 'react-bootstrap/ListGroup'

function RescueCard( {r, r: {id, name, image_url, bio, location}} ){

    const {rescues, setRescues} = useContext(RescuesContext)

    console.log(name)

    const deleteRescue = () => {
        fetch(`rescues/${id}`, {
            method: 'DELETE'
        })
        handleRescueDelete(id)
    }

    const handleRescueDelete = (id) => {
        const remainingRescues = rescues.filter((r) => r.id !== id)
        setRescues(remainingRescues)
    }

    console.log(r.pets.map((p) => {
        console.log(p)
    }))

    const petNames = r.pets.map((p) => {
        return p.name
    }).join(', ')

    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Title className="text-center">{name} - ID: {id}</Card.Title>
                <Card.Img src={r.image_url}/>
                <Card.Text>{bio} Based in {location}.</Card.Text>
                <Card.Text>{name} is or has been responsible for: {petNames}. Learn more about them at pets!</Card.Text>
                <Button onClick={deleteRescue}>Delete</Button>
            </Card>
        </div>
    )
};

export default RescueCard