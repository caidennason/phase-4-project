import { createContext, useState} from 'react'

const AdoptersContext = createContext(null);

const AdoptersProvider = ( {children} ) => {
    const [adopters, setAdopters] = useState([]);

    const loadAdopters = () => {
        fetch('/adopters')
        .then(res => res.json())
        .then(loadedAdopters => setAdopters(loadedAdopters))
    };

    // add adopters
    const addAdopter = (adopter) => {
        setAdopters([...adopters, adopter])
    }

    // POST adopters
    const submitAdopters = (adopter) => {
        fetch('/adopters' , {
            method: 'POST',
            headers: {
                "ACCEPT": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adopter)
        })
        .then(res => res.json())
        .then(adopter => addAdopter(adopter))
    }

    return (
        <AdoptersContext.Provider value={{ adopters, setAdopters, loadAdopters, submitAdopters }}>
            {children}
        </AdoptersContext.Provider>
    );

}

export { AdoptersProvider, AdoptersContext }

