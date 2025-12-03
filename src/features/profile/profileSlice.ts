import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../../app/store';

export interface ProfileState {
  nickname: string;
  avatarUrl?: string;
}

const initialState: ProfileState = {
  nickname: 'Detective_001',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    setAvatarUrl(state, action: PayloadAction<string | undefined>) {
      state.avatarUrl = action.payload;
    },
  },
});

export const {setNickname, setAvatarUrl} = profileSlice.actions;
export default profileSlice.reducer;

export const selectStats = (state: RootState) => {
    const answers = state.game.answers;
    const solvedTotal = answers.length;
    const solvedCorrect = answers.filter((a) => a.isCorrect).length;

    const difficulties: Array<'easy' | 'medium' | 'hard'> = [
        'easy',
        'medium',
        'hard',
    ];

    const byDifficulty = difficulties.map((diff) => {
        const dAnswers = answers.filter((a) => a.difficulty === diff);
        const dCorrect = dAnswers.filter((a) => a.isCorrect).length;
        return {
            difficulty: diff,
            total: dAnswers.length,
            correct: dCorrect,
            percent: dAnswers.length
                ? Math.round((dCorrect / dAnswers.length) * 100)
            : 0,
        }
    })

    return {
        solvedTotal,
        solvedCorrect,

    }
}