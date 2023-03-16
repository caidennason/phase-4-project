import { createContext, useState} from 'react'

const AdoptersContext = createContext(null);

const AdoptersProvider = ( {children} ) => {
    const [adopters, setAdopters] = useState([]);

    const loadAdopters = () => {
        fetch('/adopters')
        .then(res => res.json())
        .then(loadedAdopters => setAdopters(loadedAdopters))
    };

    return (
        <AdoptersContext.Provider value={{ adopters, setAdopters, loadAdopters }}>
            {children}
        </AdoptersContext.Provider>
    );

}

export { AdoptersProvider, AdoptersContext }

