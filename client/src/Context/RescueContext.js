import { createContext, useState } from "react";

const RescuesContext = createContext(null);

const RescuesProvider = ({ children }) => {
    const [rescues, setRescues] = useState([])

    const loadRescues = () => {
        fetch('/rescues')
        .then(res => res.json())
        .then(loadedRescues => setRescues(loadedRescues))
    };

    return (
    <RescuesContext.Provider value={ {rescues, setRescues, loadRescues} }>
        {children}
    </RescuesContext.Provider>
    );

};

export { RescuesProvider, RescuesContext }