import express from 'express'
import { login, signup } from '../Controllers/auth.js';
import { askquestion ,getquestion} from '../Controllers/question.js';
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/askquestion', askquestion)
router.get('/getquestion', getquestion)
export default router