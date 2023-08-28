// const {Router} = require("express")
// const {search} = require('./../controllers/productos.controller')
// const router = Router()

// //localhost/productos
// router.post('/',(request, response)=>{
//     console.log(request.body)
//     response.send()
// })
// router.get('/', search)

// module.exports= router

const {Router} = require('express')
const {searchall, insert, searchone, deletepro} = require('./../controllers/productos.controller')



const router = Router()
//localhost/productos
router.post('/', (request, response)=>{
    store(request, response)
})


router.post('/', insert)
router.get('/', searchall)
router.get('/:id', searchone)
router.delete('/', deletepro)

module.exports=router