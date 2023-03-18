import { createContext, useState } from "react";

const RescuesContext = createContext(null);

const RescuesProvider = ({ children }) => {
    const [rescues, setRescues] = useState([])

    // GET rescues
    const loadRescues = () => {
        fetch('/rescues')
        .then(res => res.json())
        .then(loadedRescues => setRescues(loadedRescues))
    };

    // add rescues
    const addRescue = (rescue) => {
        setRescues([...rescues, rescue])
    }

    // POST rescues
    const submitRescues = (rescue) => {
        fetch('/signup' , {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rescue)
        })
        .then(res => res.json())
        .then(rescue => addRescue(rescue))
    };

    // POST for login
    const logIn = (rescue) => {
        fetch('/login', { 
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rescue)
        })
        .then(res => res.json())
        .then(rescue => console.log(rescue))
    }

    return (
    <RescuesContext.Provider value={ {rescues, setRescues, loadRescues, submitRescues, logIn} }>
        {children}
    </RescuesContext.Provider>
    );

};

export { RescuesProvider, RescuesContext }