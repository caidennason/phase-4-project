import { createContext, useState } from "react"

const LoginContext = createContext(null)

const LoginProvider = ({children}) => {
    const [login, setLogin] = useState([])

    // GET 
}