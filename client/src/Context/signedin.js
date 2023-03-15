import React, {createContext, useState} from 'react'

// create the context object
const SignInContext = createContext()

// create the context provider (component)
function SignInProvider({children}){

    // for dynamic context, use state
    const [signIn, setSignIn] = useState(false)

    const value = [signIn, setSignIn]

    return(
        // when exporting the value, it should be true or false. this will work with logged in rescues because you can set the state to true by setting the value to true
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