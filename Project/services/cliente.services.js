import clienteRepository from '../repositories/cliente.repository.js'


// Funcoes Clientes
async function cadastrarCliente(cpf,nome,nasc,salario){

    /*if((await listarCliente(cpf)).length == 0){
        let cliente = await clienteRepository.postCliente(cpf,nome,nasc,salario);
        return cliente
    }else{
        return {"error":"Cliente já cadastrado"}

    }*/

    let cliente = await clienteRepository.postCliente(cpf,nome,nasc,salario);
    return cliente

}

async function listarClientes(){
    let clientes = await clienteRepository.getAllClientes();
    return clientes
}

async function listarCliente(cpf){
    let cliente = await clienteRepository.getCliente(cpf);
    return cliente
}

async function alterarCliente(cpfold,cpf,nome,nasc,salario){
    let clienteAlterado = await clienteRepository.putCliente(cpfold,cpf,nome,nasc,salario);
    return clienteAlterado
}

async function deletarCliente(cpf){
    await clienteRepository.deleteCliente(cpf);

    // Verifica se deletou
    if((await listarCliente(cpf)).length == 0){
        return true
    }else{
        return false
    }
}

export default {listarCliente,listarClientes,deletarCliente,alterarCliente,cadastrarCliente}