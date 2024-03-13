import express from "express";

import {deleteUser, getAllUsers, upDateUser} from "../controllers/user";
import { isauthentication, isOwner } from "middleware";

export default (router: express.Router) =>  {
    router.get("/users", isauthentication, getAllUsers)
    router.delete("/users/id", isauthentication, isOwner, deleteUser)
    router.patch("/users/id", isauthentication, isOwner, upDateUser)

}
