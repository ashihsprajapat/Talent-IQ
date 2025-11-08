
import mongoose from 'mongoose'
import { ENV } from './env.js'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("✅  Connected to Database ", conn.connection.host)
    } catch (e) {
        console.log("❌ error connecting to database ", e)
        process.exit(1);  // 0 means success and 1 means filure
    }
}