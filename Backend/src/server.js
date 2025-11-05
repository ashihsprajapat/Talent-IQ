

import express from 'express'
import { ENV } from './lib/env.js';

const app = express();


app.listen(ENV.PORT, () => {
    console.log("Server is running on port", ENV.PORT);
})


app.get("/", (req, res) => {

    res.send("Api is working successfully")
})