import Question from '../Models/questionSchema.js'

export const askquestion = async (req, res) => {

    try {
        const postQuestionData = req.body;
        const postQuestion = new Question({ ...postQuestionData, userId: req.userId })
        await postQuestion.save();
        return res.status(200).json({ message: "Question posted successfully." })
    } catch (error) {
        console.log(error);
        return res.status(409).json({ message: "Couldn't post a new question" })
    }
}

export const getquestion = async (req, res) => {

    try {
        const allquestion = await Question.find();
        return res.status(200).json(allquestion)
    } catch (error) {
        console.log(error);
        return res.status(409).json({ message: "Couldn't post a new question" })
    }
}