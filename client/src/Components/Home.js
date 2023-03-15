import React, {useState} from 'react'
// import Button from 'react-bootstrap/Button'

function Home(){

    const [checkState, setState] = useState(0)

    return(
        <div>
            <h1 onClick={() => setState(Math.random() * 1000)}>Home</h1>
            <h2>{checkState}</h2>
            {/* <Button></Button> */}
        </div>
    )
}

export default Home