import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'
import 'bootstrap/dist/css/bootstrap.css';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import userReducer from './ducks/login';
import productsData from './data/products';
import App from './App';
import CheckOut from './CheckOut';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(
    persistedReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);


let persistor = persistStore(store)

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/checkout" element={<CheckOut/>} />
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);
