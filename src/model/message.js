import mongoose from 'mongoose'

const MessageSchema = {
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        minLength: 1,
        maxLength: 1500,
        required: true,
    },
    to: String,
    type: {
        type: String,
        default: 'UNICAST' | 'MULTICAST' | 'BROADCAST'
    },
    date: {
        type: Date,
        default: Date.now()
    }
}

export const MessageModel = mongoose.model('Chat', MessageSchema)