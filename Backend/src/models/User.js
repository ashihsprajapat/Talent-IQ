
import mongoose, { model, Schema } from 'mongoose'

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    clerkId: { type: String, required: true, unique: true },
    profileImage: { type: String, default: "" }
}, { timestamps: true })

const User = mode("User", userSchema);

export default User;