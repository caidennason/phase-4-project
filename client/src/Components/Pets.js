import React, { useContext, useEffect } from 'react'
import { PetsContext } from '../Context/PetsContext'
import PetSubmissionForm from './PetSubmissionForm'
import PetCard from './PetCard'
import PetsAdoptersInfoBlock from './PetsAdoptersInfoBlock'
import PetsRescuesInfoBlock from './PetsRescuesInfoBlock'
import { useNavigate } from 'react-router-dom'
import { RescuesContext } from '../Context/RescueContext'
import { AdoptersContext } from '../Context/AdopterContext'
import Dropdown from 'react-bootstrap/Dropdown'

function Pets(){

    const navigate = useNavigate()
    const {loadPets, pets} = useContext(PetsContext)
    const {currentRescue, isLoading, rescues, loadRescues} = useContext(RescuesContext)
    const {loadAdopters, adopters} = useContext(AdoptersContext)
    console.log('am i signed in?', currentRescue)
    console.log(adopters)

    useEffect(() => {
        if (!currentRescue && !isLoading){
        navigate('/')
        } else {
            loadPets()
            loadAdopters()
            loadRescues()
        }
    }, [currentRescue, isLoading]);

    return (
        <div>
            Make sure to use adopters and rescues ID's when editing pets!
        <Dropdown >
            <Dropdown.Toggle variant="dark" style={{color:"peachpuff"}}>
                Adopter Information
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {adopters.map((a) => {
                return <PetsAdoptersInfoBlock key={a.id} id={a.id} a={a}/>
            })}
            </Dropdown.Menu>
        </Dropdown>
            <br></br>
        <Dropdown>
            <Dropdown.Toggle variant="dark" style={{color:"peachpuff"}}>
                Rescue Information
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {rescues.map((r) => {
                return <PetsRescuesInfoBlock key={r.id} id={r.id} r={r}/>
            })}
            </Dropdown.Menu>
            <PetSubmissionForm />
            </Dropdown>
            {pets.map((p) => {
                return <PetCard key={p.id} p={p} />
            })}
        </div>
    )

}

export default Pets