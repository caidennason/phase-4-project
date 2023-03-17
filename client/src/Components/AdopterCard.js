import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function AdopterCard({a}){

    return(
        <Card style={{width: '18rem'}}>
            <Card.Title>{a.name}</Card.Title>
            <Card.Img />
            <Card.Text>{a.bio} {a.name} currently lives in {a.location}.</Card.Text>
            <Button></Button>
        </Card>
    )
}

export default AdopterCard