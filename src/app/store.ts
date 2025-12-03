import { configureStore } from "@reduxjs/toolkit";
import gameReducer from '../features/game/gameSlice';
import profileReducer from '../features/profile/profileSlice';
export const store = configureStore({
    reducer: {
        game: gameReducer,
        profile: profileReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch