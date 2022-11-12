import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistedStore = persistStore(store)
