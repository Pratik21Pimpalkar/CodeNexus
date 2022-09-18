import axios from 'axios'

export const login = (data) => (dispatch) => {
    try {
        dispatch({ type: "AUTH", data })
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        dispatch({ type: "AUTH",message: "Something went wrong" })
    }

}

export const signup = (user) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API}signup`, user)
        console.log(data);
        dispatch({ type: "AUTH", data })
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        dispatch({type: "AUTH", message: "Something went wrong" })
    }

}

export const currentUser =(data)=>{
    return {
        type: "FETCH_USER",
        payload:data
    }
}