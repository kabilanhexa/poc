import { combineReducers } from '@reduxjs/toolkit';

import { reducer as auth } from './auth/Slice';

export default function rootReducer() {
    const rootReducer = combineReducers({
       auth,
    });
    return rootReducer;
}
 