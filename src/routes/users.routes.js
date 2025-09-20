import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/", (req, res) => 
    res.json({message: "nuevo usuario agregado"})
); // CREATE
usersRouter.get('{/:id}', (req, res) => 
    res.json({message: "usuario consultado: " + req.params.id }
    ));  // READ
usersRouter.put("/:id", (req, res) => 
    res.json({message: "usuario actualizado " + req.params.id})
);  // UPDATE
usersRouter.delete("/:id", (req, res) => 
    res.json({message: "usuario eliminado " + req.params.id})
); // DELETE

export default usersRouter;