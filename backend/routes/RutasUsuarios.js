var rutas = require("express").Router();
var {mostrarUsuarios,borrarUsuario,updateUsuarios,buscarPorId,nuevoUsuario} = require("../DB/UsuariosDB");

rutas.get("/",async (req,res)=>{
    var usuariosValidos = await mostrarUsuarios();
    res.json(usuariosValidos);
});

rutas.get("/buscarPorId/:id",async (req,res)=>{
    var usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    var usuarioGuardado = await nuevoUsuario(req.body);
    res.json(usuarioGuardado);
});

rutas.post("/updateUsuario",async(req,res)=>{
    var usuarioGuardado = await updateUsuarios(req.body);
    res.json(usuarioGuardado);
});

rutas.delete("/borrarUsuario/:id",async (req,res)=>{
    var usuariBorrado = await borrarUsuario(req.params.id);
    res.json(usuariBorrado);
});

module.exports = rutas;