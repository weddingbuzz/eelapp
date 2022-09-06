const express = require('express');
const gateway = require('fast-gateway');
require('dotenv').config();


const port = 3000;
const baseUrlAuth = process.env.BASE_URL + ':' + process.env.AUTH_PORT;
const baseUrlUser = process.env.BASE_URL + ':' + process.env.USER_PORT;
const server = gateway({
    routes : [
        {
            prefix: '/auth',
            target: baseUrlAuth + '/auth',
            hooks: {

            }
        },
        {
            prefix: '/user',
            target: baseUrlUser + '/user',
            hooks: {

            }
        },
    ]
})

server.get('mytesting', (req, res)=>{
    res.send('yes called gateway');
})

server.start(port).then(server=>{
    console.log('API gateway is runing on port 3000')
})
