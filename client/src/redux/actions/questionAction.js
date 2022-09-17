import axios from 'axios';
export const askQuestionAction = (questionData) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API}askquestion`, questionData)
        dispatch({
            type: "ASK_QUESTION",
            payload: data
        })
        dispatch(getAllQuestionAction())
    } catch (error) {
        dispatch({
            payload: { message: "Something went wrong" }
        })
    }
}
export const getAllQuestionAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}getquestion`)
        dispatch({
            type: "GET_ALL_QUESTION",
            payload: data
        })

    } catch (error) {
        dispatch({
            payload: { message: "Something went wrong" }
        })
    }
}