import express from "express";
import { createServer } from "node:http";
import { Server} from "socket.io";

export const httpConfig = () => {
    const app = express();
    const server = createServer(app);
    const ws = new Server(server);

    return {
        app,
        server,
        ws
    }
}