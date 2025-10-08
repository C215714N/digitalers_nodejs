export const dbConn = (URI) => 
    mongoose.connect(URI)
    .then(_ => console.log("database connected"))
    .catch(err => console.log(err))
