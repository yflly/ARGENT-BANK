import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  // le nom du slice
  name: "user",
  //le state initial
  initialState: {
    //email: "",
    connected: false,
    token: "",
    user: {},
  },
  //reducers permet de définir les actions et le reducer
  reducers: {
    // l'action setEmail
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    //l'action pour obtenir le token
    setToken: (state, action) => {
      state.connected = true;
      state.token = action.payload;
    },
    //l'action pour récupérer info user
    setUser: (state, action) => {
      state.user = action.payload;
    },
    //update user
    updateUser: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
    },

    logOut: (state) => {
      state.connected = false;
      state.token = 0;
      state.user = "";
      sessionStorage.clear();
    },
  },
});

export const { setEmail, setToken, setUser, updateUser, logOut } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
