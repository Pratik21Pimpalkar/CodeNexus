import express from 'express'
import { login, signup } from '../Controllers/auth.js';
import { askquestion, deletequestion, getquestion, votequestion } from '../Controllers/question.js';
import { postanswer, deleteanswer } from '../Controllers/answer.js'
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/askquestion', askquestion)
router.get('/getquestion', getquestion)
router.patch('/postanswer/:id', postanswer)
router.delete(`/deletequestion/:id`, deletequestion)
router.patch(`/deleteanswer/:id`, deleteanswer)
router.patch(`/vote/:id`, votequestion)
export default router