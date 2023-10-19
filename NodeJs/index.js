const express = require("express");
const routes = require('./src/routes');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(port, () => console.log(`server started on port: ${port} `))