import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)

    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Carrito de Compras
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod2_nombre}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.prod2_oferta ? "10%" : "Sin Oferta"}</td>
                            <td>S/ {prod.prod2_precio}</td>
                            <td>S/ {prod.prod2_oferta ? 
                            prod.cantidad * prod.prod2_precio * 0.9 : 
                            prod.cantidad * prod.prod2_precio}</td>
                        </tr>  
                    ))}
                </tbody>
            </table>
        </div>
    )
}