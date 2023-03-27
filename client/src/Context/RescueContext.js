import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RescuesContext = createContext(null);

const RescuesProvider = ({ children }) => {
    const navigate = useNavigate()
    const [rescues, setRescues] = useState([])
    const [currentRescue, setCurrentRescue] = useState(false)
    const [rescueError, setRescueError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    // const [myRescueProfile, setMyRescueProfile] = useState([])

    // GET rescues
    const loadRescues = () => {
        fetch('/rescues')
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => console.log(err))
                navigate('/')
            } else {
                res.json().then((loadedRescues) => setRescues(loadedRescues))
            }
        })
        // .then(res => res.json())
        // .then(loadedRescues => setRescues(loadedRescues))
    };

    // // GET show my rescue
    // const rescueProfile = () => {
    //     fetch('/rescues/:id')
    //     .then(res => res.json())
    //     .then(resProfile => setMyRescueProfile(resProfile))
    //     setIsLoading(false)
    // }

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
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setRescueError(err.error))
            } else {
                res.json().then((res) => {
                addRescue(res)
                setCurrentRescue(res)
                setRescueError(null)
                navigate('/myrescue')
            })
        }
        })
        // .then(res => res.json())
        // .then(rescue => addRescue(rescue))
    };

    // POST for login
    const logIn = (rescue) => {
        console.log('logging in')
        fetch('/login', { 
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rescue)
        })
        .then((res) => {
            if (!res.ok) {
                res.json().then((err) => setRescueError(err.error))
            } else {
                res.json().then((res) => {
                console.log('res', res)
                setCurrentRescue(res)
                setRescueError(null)
                navigate('/myrescue')
            })
            }
        })
        // .then(res => res.json())
        // .then(rescue => setCurrentRescue(rescue))
        // .then(rescue => console.log(rescue))
    }

    // DELETE for logout
    const logOut = () => {
        fetch('/logout' , {
            method: 'DELETE',
        })
        // .then(res => res.json())
        // .then(rescue => setRescues(null))
        .then((res) => {
            if (res.ok) {
                // setCurrentRescue(false)
                navigate('/')
                setCurrentRescue(false)
            }
        })
    }
    console.log(currentRescue)
    // GET for auto login  
    useEffect(() => {
        // auto-login -- won't work if you don't set rescues to null when its state is created
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((rescue) => {
                setCurrentRescue(rescue);
                setIsLoading(false) // enoch: said to have a different state for your rescue login
                });
            }
        })
      }, []);

    return (
    <RescuesContext.Provider value={ {rescues, setRescues, loadRescues, submitRescues, logIn, logOut, rescueError, setRescueError, currentRescue, isLoading, setIsLoading} }>
        {children}
    </RescuesContext.Provider>
    );

};

export { RescuesProvider, RescuesContext }