import express from 'express'
import {getUsers, createUser, getUserById, deleteUser, updateUser, loginUser} from "../controllers/userController.js"



export const userRoute = express.Router() 

//Endpoints

userRoute.get("/", getUsers)
userRoute.post("/login", loginUser)
userRoute.post("/create", createUser)
userRoute.get("/:id", getUserById)
userRoute.patch("/update/:id", updateUser)
userRoute.delete("/delete/:id", deleteUser)