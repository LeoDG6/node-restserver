import { request, response } from "express";

// http://localhost:8080/api/usuarios?q=hola&nombre=aaron&apikey=123
// http://localhost:8080/api/usuarios?q=hola&apikey=123
// http://localhost:8080/api/usuarios?q=hola&page=1&limit=10
const usuariosGet = (req = request, res = response) => {
  //const query = req.query;
  const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        //query
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

// http://localhost:8080/api/usuarios/10
const usuariosPut = (req, res = response) => {
    //const id = req.params.id;
    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    })
  }

  // http://localhost:8080/api/usuarios
  const usuariosPost = (req, res = response) => {
    //const body = req.body;
    const {id, nombre, apellido, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        //body
        nombre,
        apellido,
        edad
    })
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
  }

  const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
  }

export {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}