const express = require('express');
const router = express.Router();
const getConnection = require('../config/connection');
const connection = new getConnection()
const postSchema = require('../schemas/postSchema')

router.post('/create', async (req,res) => {
    await connection.connect()

    req.body
    postSchema.create()
})

router.get('/get', async (req,res) => {

})

router.delete('/delete', async (req,res) => {

})

router.put('/update', async (req,res) => {

})