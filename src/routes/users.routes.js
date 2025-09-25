import { Router } from "express";
import * as userController from "../controllers/users.controllers.js"

const usersRouter = Router();

usersRouter.post("/", userController.createUser); // CREATE
usersRouter.get('{/:id}', userController.findUserById) // READ
usersRouter.put("/:id", userController.updateUser); // UPDATE
usersRouter.delete("/:id", userController.deleteUser); // DELETE

export default usersRouter;