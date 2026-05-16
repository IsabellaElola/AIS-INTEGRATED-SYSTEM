<<<<<<< HEAD
import jwt from 'jsonwebtoken';
import * as UserModel from '../models/UserModel.js';

const checkToken = async (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization){
        res.status(401).json({
            success:false, 
            message:'You do not have access'});
    }

=======
import jwt from "jsonwebtoken";
import { doesUserExist } from "../models/UserModel.js";
import connect from "../config/db.js";

const authHandler = async(req, res, next) =>{
    const {authorization} = req.headers;
    if(!authorization){
        res.status(401).json({
            success: false,
            message: [
                {result : "You do not have permission to access the app."}
            ]
        })
    }
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f
    const token = authorization.split(' ')[1];

    try{
        const {id} = jwt.verify(token, process.env.SECRET);
<<<<<<< HEAD
        const [user] = await UserModel.getUser(id);
        //req.user = user[0].id;
        next();
    }catch(err){
       res.status(401).json({
        success:false, 
        message:[
            {result:'Request Unauthorized'}]
        });
    }



}

export default checkToken;
=======
        const conn = await connect();
        await doesUserExist(id, conn);
        conn.release();
        
        next();
    }catch(err){
        res.status(401).json({
            success: false,
            message: [
                {result : "Request is unauthorized"}
            ]
        })
    }
}

export default authHandler;
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f
