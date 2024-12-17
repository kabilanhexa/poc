import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userObj:null,
    isUserAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       loadUser: (state, { payload }) => {
          const { token, user } = payload;
          return {
             ...state,
             token,
             name: '',
             firstName: '',
             lastName: '',
             email: 'noemail@fleetcor.com',
             _id: '12345',
             isUserAuthenticated: true,
             tempPassword: null,
             followFP: false,
             userObj:user
          };
       },      
       setAuth: (state, { payload }) => {
          const {auth} = payload
          return {
             ...state,
             isUserAuthenticated: auth
          }
       },
    },
 });
 
 export const { name, actions, reducer } = authSlice;
 
 