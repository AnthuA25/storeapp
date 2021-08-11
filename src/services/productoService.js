import axios from "axios"

const URL = `${process.env.REACT_APP_API}/productos2`

const obtenerProductos = async(busqueda = "") =>{
    try {
        let {data} = await axios.get(`${URL}?search=${busqueda}`)
        return data //ya tenemos los datos
    } catch (error) {
        throw error
    }
}

const obtenerProductosPorId = async(id) =>{
    try {
        let {data} = await axios.get(`${URL}/${id}`)
        return data //ya tenemos los datos
    } catch (error) {
        throw error
    }
}

export{
    obtenerProductos,
    obtenerProductosPorId
}
