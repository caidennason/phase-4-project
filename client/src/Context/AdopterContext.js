import { createContext, useState} from 'react'

const AdoptersContext = createContext(null);

const AdoptersProvider = ( {children} ) => {
    const [adopters, setAdopters] = useState([]);
    const [adopterError, setAdopterError] = useState(null);

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
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setAdopterError(err.error))
            } else {
                res.json().then((res) => addAdopter(res))
            }
        })
        // .then(res => res.json())
        // .then(adopter => addAdopter(adopter))
    };

    return (
        <AdoptersContext.Provider value={{ adopters, setAdopters, loadAdopters, submitAdopters, adopterError, setAdopterError }}>
            {children}
        </AdoptersContext.Provider>
    );

}

export { AdoptersProvider, AdoptersContext }

