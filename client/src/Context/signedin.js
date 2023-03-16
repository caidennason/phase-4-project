import React, {createContext, useState, useEffect} from 'react'

// create the context object
const SignInContext = createContext()

// pet context

// create the context provider (component)
function SignInProvider({children}){

    // for dynamic context, use state
    const [signIn, setSignIn] = useState(false)

    const value = [signIn, setSignIn]

    return(
        // wrap your app in the context
        <SignInContext.Provider value={value}> 
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