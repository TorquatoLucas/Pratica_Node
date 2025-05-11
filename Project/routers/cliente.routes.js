import express from 'express'
import clienteControllers from '../controllers/cliente.controllers.js'

const router = express.Router()


// Clientes
router.get('/', clienteControllers.listarClientes)
router.get('/:cpf', clienteControllers.listarCliente)
router.post('/', clienteControllers.cadastrarCliente)
router.put('/:cpf', clienteControllers.alterarCliente)
router.delete('/:cpf', clienteControllers.deletarCliente)


export default router;

