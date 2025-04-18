import '../styles/globals.css';
import Head from 'next/head';


import { Provider } from 'react-redux';
import tweets from '../reducers/Tweets';
import user from '../reducers/users';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({ tweets, user });
const persistConfig = { key: 'hackatweet', storage };
const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
const persistor = persistStore(store);

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Head>
                    <title>HackaTweet</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default App;