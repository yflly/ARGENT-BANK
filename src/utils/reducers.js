import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  // le nom du slice
  name: "user",
  //le state initial
  initialState: {
    email: "",
    token: "",
  },
  //reducers permet de définir les actions et le reducer
  reducers: {
    // l'action setEmail
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    //l'action setToken
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setEmail, setToken } = actions;

export default reducer;
