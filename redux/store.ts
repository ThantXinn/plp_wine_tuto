import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    WebStorage,
    persistReducer,
    persistStore,
} from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';
import plpReducer from "./plpWineSlice";

export function createPersistStore(): WebStorage{
    const isServer = typeof window === "undefined";

    //will returns dummy server
    if (isServer) {
        return {
            getItem() {
                return Promise.resolve(null);
            },
            setItem() {
                return Promise.resolve();
            },
            removeItem() {
                return Promise.resolve();
            },
        };
    }
    return createWebStorage("local");
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createPersistStore();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, plpReducer)

export const store = configureStore({
    reducer: {
        plpWine: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch