import { connect as conn } from "mongoose";

export const dbConn = (URI) => 
    conn(URI)
    .then(() => console.log(`conectado a mongodb server`))
    .catch(err => console.log(err))