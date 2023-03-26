import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function PetsAdoptersInfoBlock({a}){

    return(
            <ListGroup >
                <ListGroup.Item>{a.name}, ID: {a.id}</ListGroup.Item>
            </ListGroup>
    )

}

export default PetsAdoptersInfoBlock