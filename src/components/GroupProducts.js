import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function GroupProducts({productos}) {
    console.log(productos)
    return (
        <div  className="container">
            <div className="row mt-3">
                {productos.map((prod, i) => (
                    <div className="col-6 col-lg-3" key={i}>
                        <Link className="card mb-4" to={`/detalle/${prod.prod2_id}`}>
                            <img 
                                src={prod.prod2_imagen} 
                                className="card-img-top"
                                alt={prod.prod2_nombre}
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {prod.prod2_nombre}
                                </h6>
                                <span className="fw-bold">
                                    S/ {prod.prod2_precio}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
