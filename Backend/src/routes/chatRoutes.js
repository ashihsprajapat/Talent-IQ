
import express from 'express'
import { tokenStreamGern } from '../controller/chatController.js';
import { protectRouter } from '../middleware/protectRouter.js';
const chatRoute = express.Router()

"/api/chat/token"
chatRoute.get("/token", protectRouter, tokenStreamGern)


export default chatRoute;