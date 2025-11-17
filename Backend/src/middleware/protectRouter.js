

import { requireAuth } from '@clerk/express'
import User from '../models/User.js';


//when you pass an array as middleware then express it authomatically flatten and excute one by one
export const protectRouter = [
    requireAuth({ signInUrl: "/sign-in" }),
    async (req, res, next) => {
        try {
            const clerkId = req.auth().userId;
            if (!clerkId)
                return res.json({ message: "user id not found" })

            const user = await User.findOne({ clerkId })
            if (!user) return res.json({ message: "User not found" })

            req.user = user
            next();
        } catch (error) {
            console.log("error in clerk route protect")
            res.json({ message: "internal server error   " })
        }
    }
]