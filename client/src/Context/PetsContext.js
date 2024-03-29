import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// create context for PETS
const PetsContext = createContext(null);

const PetsProvider = ({children}) => {
    // value that is given to the context
    const [pets, setPets] = useState([]);
    const [petError, setPetError] = useState(null)

    const navigate = useNavigate()

      // get pets
        const loadPets = () => {
        fetch('/pets')
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => console.log(err))
                navigate('/')
            } else {
                res.json().then((loadedPets) => setPets(loadedPets))
            }
        })
        // .then(res => res.json())
        // .then(loadedPets => setPets(loadedPets))
    };
    //

    // add pet
    function addPet(pet){
        setPets([...pets, pet])
    }
    // post pets
    const submitPets = (pet) => {
        fetch('/pets' , {
            method: 'POST', 
            headers: {
                "Accept": "appliation/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pet)
        })
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setPetError(err.error))
            } else {
                res.json().then((res) => addPet(res))
                setPetError(null)
            }
        })
    };

    return(
        // the Provider gives access to the context to it's children
        <PetsContext.Provider value={ {pets, loadPets, setPets, submitPets, petError, setPetError} }>
            {children}
        </PetsContext.Provider>
    );
};

// export it so you can grab it in you components files
export { PetsContext, PetsProvider }