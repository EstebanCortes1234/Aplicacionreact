// const mysql2 = require('mysql2/promise')

// const connect = async () => {
//     const connection = await mysql2.createConnection({
//         host: 'localhost', 
//         user: 'root',
//         password: '',
//         database: 'inventario'
//     })

//     return connection
// }

// module.exports = connect

const mysql2 = require('mysql2/promise')
const connect = async() => {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'inventario'
    })
    return connection
}
module.exports=connect