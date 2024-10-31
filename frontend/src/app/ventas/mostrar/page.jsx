import axios from "axios";
import Boton from "@/components/boton";
import BorrarVenta from "@/components/borrarVenta";
import Link from 'next/link';

async function getventas() {
    const url="http://localhost:3000/ventas";
    const sells = await axios.get(url);
    return sells.data;
}

async function getUserName() {
    const url="http://localhost:3000/";
    const name = await axios.get(url);
    return name.data;
}

async function getProdName() {
    const url="http://localhost:3000/productos";
    const prod = await axios.get(url);
    return prod.data;
}

async function getVentaU(idU,id) {
    var guaradaridU;
    idU.forEach(u => {
        if(u.id == id) {
            guaradaridU=u.nombre;
        }
    });
    return guaradaridU;
}

async function getVentaP(idP, id) {
    var guaradaridP;
    idP.forEach(p => {
        if (p.id == id) {
            guaradaridP=p.nombre;
        }
    });
    return guaradaridP;
}

export default async function ventas() {
    var sells=await getventas();
    var user = await getUserName();
    var prod = await getProdName();
    return (
        <div>
            <h1>Ventas</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Producto</th>
                        <th>Fecha</th>
                        <th>Estatus</th>
                        <th>Borrar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sells.map((sell) => (
                            <tr key={sell.id}>
                                <td>{sell.id}</td>
                                <td>
                                    {getVentaU(user, sell.idUsuario)}
                                </td>
                                <td>
                                    {getVentaP(prod, sell.idProducto)}
                                </td>
                                <td>
                                    {sell.fecha}
                                </td>
                                <td>
                                    {sell.estatus}
                                </td>
                                <td>
                                    <BorrarVenta id={sell.id}/>
                                </td>
                                <td>
                                    <Link href={`/ventas/mostrar/${sell.id}`}>Editar</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Boton />
        </div>
    );
}