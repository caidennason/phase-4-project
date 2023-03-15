import React, {createContext} from 'react'

// create the context object
const SignInContext = createContext()

// create the context provider (component)
function SignInProvider({children}){

    return(
        <SignInContext.Provider value="hi">
            {children}
        </SignInContext.Provider>
    )

}

// export
export {SignInContext, SignInProvider}

// wrap the app in the component
// <SignInProvider>
    // <App /> 
// </SignInProvider>