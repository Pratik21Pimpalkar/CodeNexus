import Question from "../Models/questionSchema.js"
import mongoose from "mongoose";

export const postanswer = async (req, res) => {

    const { noOfAnswer, answerBody, userAnswer, id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('Question not found');

    updateNoOfQuestion(id, noOfAnswer)
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(id, { $addToSet: { 'answer': [{ answerBody, userAnswer, userId: req.Id }] } })
        return res.status(200).json(updatedQuestion)
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" })
    }
}

const updateNoOfQuestion = async (id, noOfAnswer) => {
    try {
        await Question.findByIdAndUpdate(id, { $set: { 'noOfAnswer': noOfAnswer } })
    } catch (error) {
        console.log(error);
    }
}