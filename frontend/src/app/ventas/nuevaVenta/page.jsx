"use client";
import axios from "axios";

// Fetch available products
async function fetchAvailableProducts() {
    const url = "http://localhost:3000/productos";
    const productos = await axios.get(url);
    return productos.data;
}

// Fetch available clients
async function fetchUsuarios() {
    const url = "http://localhost:3000/";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

async function guardarUsuario(e) {
    e.preventDefault();
    const url = "http://localhost:3000/ventas/nuevaVenta";
    const datos = {
        idUsuario:document.getElementById("idUsuario").value,
        idProducto:document.getElementById("idProducto").value
    }
    const respuesta = await axios.post(url,datos);
    location.replace("/ventas/mostrar");
}
export default async function Nuevo() {
    var usuarios = await fetchUsuarios();
    var productos = await fetchAvailableProducts();
    return (
        <div className="m-0 row justify-content-center">
            <form className="text-center col-6 mt-5" action="" onSubmit={guardarUsuario}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva venta</h1>
                    </div>
                    <div className="card-body">
                        <div class="form-floating">
                            <select className="form-select" style={{height:"50px"}} id="idUsuario" aria-label="Floating label select example">
                                {
                                    usuarios.map((usuario) => (
                                    <option value={usuario.id}>
                                        {usuario.nombre}
                                    </option>
                                    ))
                                }
                            </select>
                            <label for="floatingSelect">Usuario:</label>
                        </div>
                        <div className="form-floating">
                            <select className="form-select" style={{height:"50px"}} id="idProducto" aria-label="Floating label select example">
                                {
                                    productos.map((product) => (
                                        <option value={product.id}>
                                            {product.nombre}
                                        </option>
                                    ))
                                }
                            </select>
                            <label for="floatingSelect">Producro:</label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button style={{height:"50px"}} className="btn btn-primary col w-100">Guardar nuevo Usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
};