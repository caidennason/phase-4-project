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
        fetch('/rescues' , {
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

    return (
    <RescuesContext.Provider value={ {rescues, setRescues, loadRescues, submitRescues} }>
        {children}
    </RescuesContext.Provider>
    );

};

export { RescuesProvider, RescuesContext }