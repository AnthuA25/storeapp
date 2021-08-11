import {useContext} from 'react'
import {AuthContext} from "../context/authContext"
import {Route, Redirect} from "react-router-dom"

export default function ProtectedRoute({component: Component, ...rest}) {

    const {userState} = useContext(AuthContext)

    return (
        <Route 
            {...rest}
            render={(props) =>
                userState ? (
                    // el usuario esta logueado, pasa
                    <Component {...rest} {...props}/>
                ) : (
                    // si no lo mando a login
                    <Redirect to="/login" />
                )
            }
        />
    );
    // si es null lo redirecciona hacia el home
}
