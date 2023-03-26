import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function PetsRescuesInfoBlock({r, id}){

    return(
        <ListGroup>
            <ListGroup.Item>{r.name}, ID: {id} </ListGroup.Item>
        </ListGroup>
    )
}

export default PetsRescuesInfoBlock 