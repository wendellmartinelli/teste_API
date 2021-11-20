const { Router } = require('express')
const express =require('express')
const routes= express.Router()

let db =[
    { '1': {Produto: 'Farinha de Trigo', Quantidade: '10', Nome: 'usuario 1' }},
    { '2': {Produto: 'Leite', Quantidade: '1', Nome:'usuario 2'}},
    { '3': {Nome: 'usuario 3'}}
    
]

// Inserir cadastro de matéria prima
routes.post('/add',(req,res)=> {
    const body=req.body

    if(!body){
        return res.status(400).end()
        
    db.push(body)
    return res.json(body)
    }
    
})

// Buscar dados de matéria prima
routes.get('/', (req,res) => {
    return res.json(db)
})

// Alterar dados para dar baixa 
routes.put('/id',(req,res) => {
    const {id} = req.params
    db.push(id)
    return res.json(id)
   
})

module.exports= routes