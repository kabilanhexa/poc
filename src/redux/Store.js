import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import rootReducer from './RootReducer';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const enhancers = [
    createInjectorsEnhancer({
        createReducer: rootReducer,
        runSaga,
    }),
];
 
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};
 
function configureAppStore(initialState = {}) {
    const store = configureStore({
       reducer: persistReducer(persistConfig, rootReducer()),
       enhancers : (getDefaultEnhancers) =>
       getDefaultEnhancers().concat(enhancers) ,
       middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
       devTools: process.env.NODE_ENV !== 'production',
    });
 
    sagaMiddleware.run(rootSaga);
    return store;
}

let store = configureAppStore();
let persistedStore = persistStore(store);
export { store, persistedStore };