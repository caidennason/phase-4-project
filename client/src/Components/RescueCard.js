import React, { useContext } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { RescuesContext } from "../Context/RescueContext"
import { useNavigate } from "react-router-dom";

function RescueCard( {r, r: {id, name, image_url, bio, location}} ){

    const {rescues, setRescues, setRescueError, logOut} = useContext(RescuesContext)
    const navigate = useNavigate()

    const deleteRescue = () => {
        fetch(`rescues/${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setRescueError(err.error))
            } else {
                res.json().then((res) => console.log(res))
                handleRescueDelete(id)
                logOut()
                navigate('/')
            }
        })
    }

    const handleRescueDelete = (id) => {
        const remainingRescues = rescues.filter((r) => r.id !== id)
        setRescues(remainingRescues)
    }

    const handleLogout = (e) => {
        logOut()
    }

    const handleDeleteLogout = (e) => {
        e.preventDefault()
        deleteRescue()
        handleLogout()
    }

    let petNames = r.pets.map((p) => {
        return p.name
    }).join(', ')

    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Title className="text-center">{name} - ID: {id}</Card.Title>
                <Card.Img src={r.image_url}/>
                <Card.Text>{bio} Based in {location}.</Card.Text>
                <Card.Text>{name} is responsible for: {petNames.length === 0 ? "no pets ... yet." : petNames + '. Learn more about them at pets!'}</Card.Text>
                <Button onClick={handleDeleteLogout}>Delete</Button>
            </Card>
        </div>
    )
};

export default RescueCard