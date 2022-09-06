import express from "express"
import pkg from "jsonwebtoken";
const { verify } = pkg;
import dotenv from 'dotenv';
dotenv.config();


// custom middleware create
const Auth = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({
            success: false,
            msg: 'token not found'

        })
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        verify(token, process.env.SECRET, (err, decoded) =>{
            if(err){
                return res.status(401).json({
                    success: false,
                    msg: 'token is invalid'

                })
            } else {
                req.decoded = decoded;
                req.token = token;
                next();
            }
        });

    } else {
        return res.status(400).json({
            success: false,
            msg: 'token not found'

        })
    }

}

export default Auth;

