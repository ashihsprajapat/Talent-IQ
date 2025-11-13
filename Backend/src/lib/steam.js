
import { StreamChat } from 'stream-chat'
import { ENV } from './env.js';

export const chatClient = StreamChat.getInstance(`${ENV.STREAM_API_KEY}`, `${ENV.STREAM_SECRET_KEY}`);

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUsers([...userData])
        console.log("Stream user upserted successfylly", userData)
    } catch (error) {
        console.log("error upsert stream user", error)
    }
}

export const deleteStreamUser = async (userId) => {
    try {

        await chatClient.deleteUser(userId)
        console.log("stream user delete successfully", userId)
    } catch (error) {
        console.log("error occur in deleteing stream users", error)
    }
}

