import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login(){

    const [loginName, setLoginName] = useState('Rescue Name')
    const [password, setPassword] = useState('Password')

    return(
        <>
        <Form>
            <input
            type="text"
            value={loginName}
            />
            <input
            type="text"
            value={password}
            />
            {/* <Button type="submit">Login</Button> */}
        </Form>
        </>
    )
}

export default Login