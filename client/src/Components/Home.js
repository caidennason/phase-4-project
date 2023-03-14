import React, {useState} from 'react'

function Home(){

    const [checkState, setState] = useState(0)

    return(
        <div>
            <h1 onClick={() => setState(Math.random() * 1000)}>Home</h1>
            <h2>{checkState}</h2>
        </div>
    )
}

export default Home