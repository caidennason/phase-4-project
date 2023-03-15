import React, {useState, useContext} from 'react'
import { SignInContext } from '../Context/signedin'
// import Button from 'react-bootstrap/Button'

function Home(){

    const [checkState, setState] = useState(0)
    const value = useContext(SignInContext)
    console.log(value)

    return(
        <div>
            <h1 onClick={() => setState(Math.random() * 1000)}>Home</h1>
            <h2>{checkState}</h2>
            {/* <Button></Button> */}
        </div>
    )
}

export default Home