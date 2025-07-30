const express = require("express");

const bodyParser = require("body-parser");

const { PORT } = require("./config/server-config");

const jobs = require('./utils/job');

const ApiRoutes = require("./routes/index"); 

const SetUpandStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

      app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at ${PORT}`);

        jobs();
        

    });

};

SetUpandStartServer(); 