import { MessageModel } from "../model/message";
import { httpConfig } from "./config/http"; 

export const handleMessage = (data) => {
    const { ws } = httpConfig()
    ws.emit('message', {id: `user_${socket.id}`, ...data})
}
export const handleData = (socket) => {
    const lastMonth = getDate('LAST_MONTH')
    MessageModel.find({date: { $gte: lastMonth }})
        .then((data) => socket.emit('load', data))
        .catch(err => socket.emit('error', err))
}