import React, {useContext, useEffect} from 'react'
import { RescuesContext } from '../Context/RescueContext'

function Rescues(){

    const {rescues, setRescues, loadRescues} = useContext(RescuesContext)

    useEffect(() => {
        loadRescues()
    }, []);

    console.log('pls god', rescues)

    return(
        <div>
            <h1>Rescues</h1>
            {rescues.map((r) => {
                console.log(r.name)
                return <li>{r.name} is a {r.bio}</li> 
            })}
            {/* <img src="https://i.imgur.com/QtfiWe5.png"/> */}
        </div>
    )
}

export default Rescues