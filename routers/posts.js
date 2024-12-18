const express = require('express')
const router = express.Router()


//index
router.get('/', (req,res) => {
  res.send('Rotta index: stampo tutti i posts')
})

//show
router.get('/:id', (req,res) => {
  res.send('Rotta show: stampo i dettagli del singolo post' + req.params.id)
})

//store
router.post('/', (req,res) => {
  res.send('Rotta store: Creo un nuovo post')
})

//update
router.put('/:id', (req,res) => {
  res.send('Rotta update: stampo tutti i posts')
})

//modify
router.patch('/:id', (req,res) => {
  res.send('Rotta modify: stampo tutti i posts')
})

//destroy
router.delete('/:id', (req,res) => {
  res.send('Rotta destroy: stampo tutti i posts')
})

module.exports =  router