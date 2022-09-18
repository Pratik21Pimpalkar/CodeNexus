
const authReducer = (state = { data: "" }, action) => {
    switch (action.type) {
        case "AUTH":
            var now = new Date().getTime();
            localStorage.setItem('setupTime', now);
            localStorage.setItem("Profile", JSON.stringify(action?.data))
            return { ...state, data: action?.data };
        default:
            return state;
    }
}
export default authReducer