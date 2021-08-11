import {useState,useEffect} from 'react'
import { obtenerProductos} from '../services/productoService'
import GroupProducts from '../components/GroupProducts'
import CustomCarousel from '../components/CustomCarousel'

export default function PortadaView() {
    const [productos, setProductos] = useState([])

    const getProductos = async () =>{
        try {
            let ProductosObtenidos = await obtenerProductos()
            setProductos(ProductosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getProductos()
    },[])
    return( 
        <div>
            <CustomCarousel />
            <GroupProducts productos={productos} />
        </div>
    )
}
