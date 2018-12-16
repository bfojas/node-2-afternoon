const express= require('express');
const bodyParser = require("body-parser");
const massive = require('massive');
const dotenv = require('dotenv');
const controller = require("./products_controller")
dotenv.config();

const app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database =>
    app.set('db', database)).catch(error => console.log( 'error on massive',error))

app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.update);
app.post('/api/products', controller.create);
app.delete('/api/products/:id', controller.delete)






const PORT = process.env.port || 3000

app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))