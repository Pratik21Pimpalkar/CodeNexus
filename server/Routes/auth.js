import express from 'express'
import { login, signup } from '../Controllers/auth.js';
import { askquestion ,getquestion} from '../Controllers/question.js';
import {postanswer} from '../Controllers/answer.js'
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/askquestion', askquestion)
router.get('/getquestion', getquestion)
router.patch('/postanswer/:id',postanswer)
export default router