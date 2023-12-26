import { Router } from "express";
import { usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut } from "../controllers/usuarios.js";

const router = Router();

// router.get('/', (req, res) => {
//     res.json({
//         msg: 'get API'
//     })
//   });
  
  router.get('/', usuariosGet);

  // router.put('/', (req, res) => {
  //   res.json({
  //       msg: 'put API'
  //   })
  // });

  router.put('/:id', usuariosPut);

  // router.post('/', (req, res) => {
  //   res.json({
  //       msg: 'post API'
  //   })
  // });

  router.post('/', usuariosPost);

  // router.delete('/', (req, res) => {
  //   res.json({
  //       msg: 'delete API'
  //   })
  // });

  router.delete('/', usuariosDelete);

  // router.patch('/', (req, res) => {
  //   res.json({
  //       msg: 'patch API'
  //   })
  // });

  router.patch('/', usuariosPatch);

export {router};