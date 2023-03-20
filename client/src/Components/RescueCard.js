import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function RescueCard( {r} ){

    return (
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Title className="text-center">{r.name}</Card.Title>
                <Card.Img src={r.image_url}/>
                <Card.Text>{r.bio} Based in {r.location}.</Card.Text>
                <Button>Delete</Button>
            </Card>
        </div>
    )
};

export default RescueCard