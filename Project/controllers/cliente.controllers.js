import clienteServices from '../services/cliente.services.js'


// Funcoes Clientes
async function cadastrarCliente(req, res){
    // 
    let cpf = req.body.cpf
    let nome = req.body.nome
    let nasc = req.body.nasc
    let salario = req.body.salario

    //

    //
    let cliente = await clienteServices.cadastrarCliente(cpf,nome,nasc,salario);

    //
    res.send(cliente)
}

async function listarClientes(req, res){
    let clientes = await clienteServices.listarClientes();
    res.send(clientes)
}

async function listarCliente(req, res){
    let cpf = req.params.cpf
    let cliente = await clienteServices.listarCliente(cpf);
    res.send(cliente)
}

async function alterarCliente(req, res){
    let cpfold = req.params.cpf
    let cpf = req.body.cpf
    let nome = req.body.nome
    let nasc = req.body.nasc
    let salario = req.body.salario
    let clienteAlterado = await clienteServices.alterarCliente(cpfold,cpf,nome,nasc,salario);

    res.send(clienteAlterado)
}

async function deletarCliente(req, res){
    let cpf = req.params.cpf
    let boolean = await clienteServices.deletarCliente(cpf);
    res.send(boolean)
}

export default {listarCliente,listarClientes,deletarCliente,alterarCliente,cadastrarCliente}