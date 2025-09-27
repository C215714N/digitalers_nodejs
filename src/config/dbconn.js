import mongoose from "mongoose";

export const dbConn = (URI) => 
mongoose.connect(URI)
    .then(() => console.log(`conectado a mongodb server`))
    .catch(err => console.log(err))