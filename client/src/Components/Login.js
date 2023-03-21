import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RescuesContext } from '../Context/RescueContext'

function Login(){

    const [loginName, setLoginName] = useState('Rescue Name')
    const [password, setPassword] = useState('Password')
    const {logIn} = useContext(RescuesContext)

    const handleLoginNameChange = (e) =>{
        setLoginName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        logIn({name: loginName, password: password})
    }

    return(


        <>
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