import React, {useState, useContext} from 'react'
import { SignInContext } from '../Context/signedin'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

function Home(){

    // sign in form state
    const [userName, setUserName] = useState("Username")
    const [password, setPassword] = useState("Password")

    function handleUsername(e){
        console.log(e.target.value)
        setUserName(e.target.value)
    }

    function handlePassword(e){
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    //

    // for signin state and context
    const [signIn, setSignIn] = useContext(SignInContext)
    console.log(signIn)
    // 

    function toggle(){
        setSignIn(signIn => !signIn)
    }

    return(
        <div>
            <li onClick={toggle}>Hello</li>
            <Form>
                <input 
                type="text"
                value={userName}
                onChange={handleUsername}
                />
                <input 
                type="text"
                value={password}
                onChange={handlePassword}
                />
            </Form>
            <button>Submit</button>
        </div>
    )
}

export default Home