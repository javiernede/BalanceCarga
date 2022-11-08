import express from 'express';

import cluster from 'cluster';

import os from 'os';


const app = express();

console.log('cant. de cores: ', os.cpus().length);

if (cluster.isPrimary) {

} else {
    const PORT = parseInt(process.argv(2)) || 8080;

    res.send(`Servidor express en el puerto en ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`);


    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en el puerto ${ PORT } - PID WORKER ${ process.pid }`);

    })
}