import {useState, useEffect, useContext} from 'react'
import imgLogin from "../assets/login.jpg"
import {AuthContext} from '../context/authContext'

export default function LoginView() {
    const { signIn } = useContext(AuthContext)

    return (
        <div className=" row" style={{height:'calc(100vh - 60px)'}}>
            <div className="col-sm-12 col-md-6" style={{height:'100%', overflow:'hidden'}}>
                <img
                    src={imgLogin}
                    style={{
                        maxHeight:'100%',
                        objectFit:'cover'
                    }}
                    alt="imagen Login"
                />
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h2>Ingresa!</h2>
                    <button className="btn btn-danger btn-lg" onClick={signIn}>
                        <i className="fab fa-google me-2"/>
                        Ingresa con google
                    </button>
                </div>
            </div>
        </div>
    )
}
