import express from "express";

import {deleteUserById, getUserById, getUsers } from "db/user";

export const getAllUsers = async (req: express.Request, res:express.Response) => {
    try {

    const user = await getUsers()
    return res.status(200).json(user);
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)

    }
}

export const deleteUser = async (req:express.Request, res:express.Response)=> {
    try {
    const { id } = req.params
    const deleteUser = await deleteUserById(id)
    return res.json(deleteUser)
    }catch(error){
        console.log(error)
            return res.sendStatus(400)
        
    }
}

export const upDateUser = async (req: express.Request, res:express.Response) => {
    try {
   const {id} = req.params
   const username = req.body;
   if(!username){
    return res.sendStatus(400)
    const user = await getUserById(id)
    user.username = username
    await user.save
   return res.sendStatus(200).json(user).end()
   }
    } catch (error){
        return res.sendStatus(400)
    }
}