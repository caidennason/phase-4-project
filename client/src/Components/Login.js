import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RescuesContext } from '../Context/RescueContext'
import { useNavigate } from 'react-router-dom'

function Login(){

    const navigate = useNavigate()
    const [loginName, setLoginName] = useState('Rescue Name')
    const [password, setPassword] = useState('Password')
    const {logIn, rescueError, currentRescue} = useContext(RescuesContext)

    const handleLoginNameChange = (e) =>{
        setLoginName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        logIn({name: loginName, password: password})
        setLoginName('Rescue Name')
        setPassword('Password')
    }

    let signInError
    if (rescueError == null) {
       signInError  = 'Make sure to use the correct login information!'
    } else if (rescueError != null) {
        signInError = `${rescueError}`
    }
    console.log(rescueError)

    return(


        <>
        <p>{signInError}</p>
        <Form onSubmit={handleLogin}>
            <input
            type="text"
            value={loginName}
            onChange={handleLoginNameChange}
            />
            <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            />
            <Button type="submit">Login</Button>
        </Form>
        </>
    )
}

export default Login