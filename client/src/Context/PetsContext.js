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
        // .then(res => res.json())
        // .then(pet => addPet(pet))
        // .catch((err) => {
        //     console.log(err.response, "error")
        // })
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => console.log(err))
                // addPet(res)
            } else {
                // res.json().then((err) => console.log(err))
                res.json().then((res) => addPet(res))
            }
        })
    };

    return(
        // the Provider gives access to the context to it's children
        <PetsContext.Provider value={ {pets, loadPets, setPets, submitPets} }>
            {children}
        </PetsContext.Provider>
    );
};

// export it so you can grab it in you components files
export { PetsContext, PetsProvider }