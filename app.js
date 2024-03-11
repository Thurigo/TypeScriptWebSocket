import express from 'express'
import {createServer} from 'node:http';
import { fileURLToPath } from 'node:url';
import {dirname, join} from  'node:path';
import { Server } from 'socket.io';




const app = express();
const server = createServer(app);
const io = new Server(server);



const __dirname = dirname(fileURLToPath(import.meta.url));


app.get('/', (req,res)=> {
    res.sendFile(join(__dirname, 'index.html'));
});
var count = 0 
io.on('connection', (socket) => {
    count++;
    console.log('usuário on'+ count)
    socket.on('disconnect', () => {
        count--;
        console.log('user disconnected'+ count);
      });

})


server.listen(3000, () => {
    console.log('ta rodando Eba'+ count)
})