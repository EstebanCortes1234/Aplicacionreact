// const express = require('express');
// const app = express();
// const PORT = 3000;
// const mysql = require('mysql2/promise');

// app.use(express.json());

// app.get('/',(req, res)=> {
//     res.send('Hello World!');
// });

// app.post('/productos', (request, response)=>{
//     console.log(request.body);
//     response.send();
// });

// app.use('/productos', require('./routes/productos.route'));

// app.use('/productos', require('./routes/productos.insert.route'));

// app.listen(PORT, async (err)=> {
//     if (err) {
//         console.error('Error al iniciar el servidor:', err);
//         return;
//     }

//     console.log(`Example app listening on port ${PORT}`);

//     try {
//         const connection = await mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'inventario'
//         });

//         console.log('Conexión a la base de datos exitosa.');
//     } catch (error) {
//         console.error('Error al conectar con la base de datos:', error);
//     }
// });

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, response) => {
    response.send('Hello World!')
})

app.use('/productos', require('./routes/productos.route'))

app.listen(port, (err) => {
    console.log(`Example app listening on port ${port}`)
})