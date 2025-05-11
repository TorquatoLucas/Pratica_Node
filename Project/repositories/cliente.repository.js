import BD from './bd.js'


// Pega todos os clientes
async function getAllClientes(){
    const pool = BD.conectar()
    try{
        var resposta = await pool.query('select * from cliente;')
    }catch(err){
        console.log(err)
    }finally{
        pool.end();
    }
    return resposta.rows
}

// Pega um cliente
async function getCliente(cpf) {
    const pool = BD.conectar()
    try{
        var resposta = await pool.query('select * from cliente where cpf = $1;',[cpf])
    }catch(err){
        console.log(err)
    }finally{
        pool.end();
    }
    return resposta.rows
    
}

async function postCliente(cpf,nome,nasc,salario) {
    const pool = BD.conectar()
    try{
        var resposta = await pool.query('INSERT INTO cliente VALUES ($1, $2, $3, $4) RETURNING * ;',[cpf,nome,nasc,salario])
    }catch(err){
        console.log(err)
    }finally{
        pool.end();
    }
    return resposta.rows
    
}

async function deleteCliente(cpf) {
    const pool = BD.conectar()
    try{
        await pool.query('delete from cliente where cpf = $1;',[cpf])
    }catch(err){
        console.log(err)
    }finally{
        pool.end();
    }
}

    async function putCliente(cpfold,cpf,nome,nasc,salario) {
        const pool = BD.conectar()
    try{
        var resposta = await pool.query('update cliente set cpf = $2, nome = $3, nasc = $4, salario = $5 where cpf = $1 returning * ;',[cpfold,cpf,nome,nasc,salario])
    }catch(err){
        console.log(err)
    }finally{
        pool.end();
    }
    return resposta.rows
    }
    


export default{getAllClientes,getCliente,postCliente,deleteCliente,putCliente}