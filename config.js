import { join } from 'path';

export const configHandleBars = {
    defaultLayout: join(process.cwd() + "/views/index.hbs"),
    extname: '.hbs',
};