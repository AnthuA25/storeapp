import { useState, createContext, useEffect } from "react";

export const CarritoContext = createContext()

const CarritoContextProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const anadirACarrito = (producto) => {
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].prod2_id === producto.prod2_id){
                //significa que tenemos el producto ya dentro del carrito
                const productoExiste = {
                    ...carrito[i],
                    cantidad: carrito[i].cantidad + 1
                }
                let carritoTmp = [...carrito] //como carrito es un estado, es inmutable, x eso tenemos una copia
                carritoTmp.splice(i, 1) //remuevo el producto que aumentará su cantidad
                carritoTmp.push(productoExiste) //vuelvo a agregar el producto pero con su cantidad actualizada
                setCarrito(carritoTmp) //actualizo el carrito con la copia actualizada
                return //corto la ejecución aquí
            }
        }
        setCarrito([...carrito, {...producto, cantidad:1}])
    }

    useEffect(() => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
        if(carritoStorage){
            setCarrito(carritoStorage)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    return (
        <CarritoContext.Provider value={{carrito, anadirACarrito}}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider