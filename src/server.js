import express from 'express';
import router   from './routes.js';
import bodyParser from 'body-parser';
import db from '../database.js';

const app = express();
const port = 3000;

app.use(router);
app.use(bodyParser.json)

// sincronizar os Models antes da aplicação
db.sync().then(()=>{
    console.log(`Connection with database  ${process.env.DB_NAME} established`)
}).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running at http://localhost:${port}`)
    });
});


