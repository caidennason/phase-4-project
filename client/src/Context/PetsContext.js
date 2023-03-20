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
        .then(res => res.json())
        .then(pet => addPet(pet))
        // .then(pet => console.log(pet))
    };

    function handlePetDelete(r){
        const remainingPets = pets.filter((pet) => pet.id !== r.id)
        setPets(remainingPets)
    }

    return(
        // the Provider gives access to the context to it's children
        <PetsContext.Provider value={ {pets, loadPets, setPets, submitPets, handlePetDelete} }>
            {children}
        </PetsContext.Provider>
    );
};

// export it so you can grab it in you components files
export { PetsContext, PetsProvider }

    // delete pet function
    // const handleDeletePets = (deletedPet) => {
    //     console.log("Pet deleted:", deletedPet);
    //     const remainingPets = pets.filter((p) => p.id !== deletedPet.id)
    //     setPets(remainingPets)
    //     console.log(remainingPets)
    // }

    //  // delete pet request
    //  const deletePets = (pet) => {
    //     fetch('/pets/', {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then((data) => handleDeletePets(data))
    // }

    // function handleDeletePets(r){
    //     const remainingPets = pets.filter((pet) => pet.id !== r.id)
    //     setPets(remainingPets)
    //     console.log(remainingPets)
    // }