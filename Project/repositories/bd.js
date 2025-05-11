import pg from 'pg'

function conectar(){
    const pool = new pg.Pool({
        host: "localhost",
        user: 'postgres',
        password: 'Carro10carro!',
        database: 'pratica',
        port: 5432
    })
    return pool;
}
export default{conectar}