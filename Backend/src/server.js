

import express from 'express'
import path from 'path'
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import cors from 'cors'
import {serve} from 'inngest/clerk'
import { functions, inngest } from './lib/innjest.js';

const app = express();

const __dirname = path.resolve()


app.use(express.json())

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))

app.use("/api/inngest", serve({client : inngest, functions}) )


app.get("/test", (req, res) => {
    res.json({ message: "Api is working successfully" })
})

app.get("/books", (req, res) => {
    res.json({ message: "this is the book endpoint" })
})

// this is only for developementn 
//make our app ready for deployment

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })

}


const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, () => console.log("Server is running on port", ENV.PORT))
    } catch (error) {
        console.log("error starting the server")
    }
}

// create server from here 
startServer()