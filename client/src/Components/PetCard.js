import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function PetCard({p}){

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Title className='text-center'>{p.name}</Card.Title>
                <Card.Img src={p.image_url}/>
                <Card.Text>{p.bio} {p.name} is {p.age} years old.</Card.Text>
                <Button></Button>
            </Card>
        </div>
    )
}

export default PetCard