const methods = {
    GET: "Consulta de Datos Finalizada",
    POST: "Envio de Datos Recibido",
    PUT: "actualizacion Realizada",
    DELETE: "peticion de eliminacion procesada",
}
export const getMethod = ({method, url}) => console.log({
    method, 
    url, 
    message: methods[method]
})