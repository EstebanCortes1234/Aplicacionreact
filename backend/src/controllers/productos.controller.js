// const {request, response} = require('express')
// const connection = require('./../database/connection')

// const search = async(request, response)=> {
//     const QUERY= "SELECT * FROM productos"

//     const mysql = await connection()
//     const [rows] = await mysql.query(QUERY)

//     response.status(200).json(rows)
// }

// module.exports = {search}

const {router, response, request} = require('express')
const connection = require('./../database/connection')
const searchall = async(request, response) => {
    const QUERY = "SELECT * from productos"
    const mysql = await connection()
    const [rows] = await mysql.query(QUERY)
    response.status(200).json(rows)
}
const searchone = async(request, response) => {
    const QUERY = `SELECT * from productos where id=`+request.params.id
    const mysql = await connection()
    const [rows] = await mysql.query(QUERY)
    response.status(200).json(rows)
}
const insert = async(request, response) => {
    const {id, nombre, unidad}= request.body
    const QUERY = `insert into productos(id, nombre, unidad) values(${id}, '${nombre}', '${unidad}')`
    const mysql = await connection()
    const [rows] = await mysql.query(QUERY)
    response.status(200).json(rows)
}
const deletepro = async(request, response) => {
const {id}= request.body
const QUERY = `DELETE  from productos where id= ? `
const params = [id]
const mysql = await connection()
const [rows] = await mysql.query(QUERY, params)
response.status(200).json(rows)
}

const store = async(request, response) =>{
    try{
        const {id, name, unit} = request.body
        if (!id || !name || !unit)
            return response.status(400). json({message:"la informacion es incompleta, por favor revise"})

        const  QUERY = "INSERT INTO productos (id, nombre, unidad) VALUES(?, ?, ?)"
        const mysql = await connection()
        await mysql.execute(QUERY,[id, name, unit])

        response.status(201).json({producto:{id, name, unit}})
    } 
    
    catch(error){
        console.log(error)
        return response.status(500).json({message:"Algo salio mal"})

    }
}
module.exports={searchall, searchone, insert, deletepro}