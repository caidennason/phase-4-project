import { createContext, useState } from 'react'

const ErrorsContext = createContext(null)

const ErrorsProvider = ( { children } ) => {
    const [errors, setErrors] = useState([]);

    return (
        <ErrorsContext.Provider> value={{errors, setAdopters}}
            {children}
        </ErrorsContext.Provider>
    )

}

export { ErrorsProvider, ErrorsContext }