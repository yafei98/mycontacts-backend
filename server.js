const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const app = express();
connectDb();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json()); // Provide a passer which will help us to pass the data stream that we receive from the client on the server side
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler); //Note to place it at the end of all app.use()

app.listen(port, () => {
    console.log(`Server running on the port ${port}`)
})