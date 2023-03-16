import React, { createContext, useState } from 'react';

// create context for PETS
const PetsContext = createContext(null);

const PetsProvider = ({children}) => {
    // value that is given to the context
    const [pets, setPets] = useState([]);

      // get pets
        const loadPets = () => {
        fetch('/pets')
        .then(res => res.json())
        .then(loadedPets => setPets(loadedPets))
    };
    //

    // add pet
    const addPet = pet => {
        setPets([...pets, pet])
    }
    // post pets
    const submitPets = pets => {
        fetch('/pets' , {
            method: 'POST',
            headers: {
                "Accept": "appliation/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pets)
        })
        .then(res => res.json())
        .then(pet => addPet(pet))
    }

    return(
        // the Provider gives access to the context to it's children
        <PetsContext.Provider value={ {pets, loadPets, setPets} }>
            {children}
        </PetsContext.Provider>
    );
};

// export it so you can grab it in you components files
export { PetsContext, PetsProvider }