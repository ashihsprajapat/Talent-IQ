import { chatClient } from "../lib/steam.js"

export const tokenStreamGern = async (req, res) => {
    try {
        //user clerk id in stream (not user mongoose id  bcz we save clerk id in stream as id )
        const token = chatClient.createToken(req.user.clerkId)

        res.json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image,
        })
    } catch (error) {
        console.log("internal server error", error.message)
        res.json({ message: error.message })
    }
}