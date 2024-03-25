
import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    user: null,
    token: null,
    auth: false,

}



export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            //    console.log("action",action)
            const { token, auth ,userdata} = action.payload

            state.token = token
            state.auth = auth
            state.user=userdata
            localStorage.setItem("token", JSON.stringify(state.token))
            localStorage.setItem("auth", true)
        },
        updatecustomer: (state, action) => {

        },
        logout: (state, action) => {
            state.auth = false;
            state.user = null;
            state.token = null;

        }
    }

})


export const { login, logout, updatecustomer } = AuthSlice.actions;
export const selectToken = state => state.auth.token;
// export const selectApiId = state => state.auth.apiId;

export default AuthSlice.reducer;
