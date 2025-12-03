import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CaseAnswer, Difficulty, GameState } from "./types";
import { casesMock } from "./mockData";

const initialState: GameState = {
    cases: casesMock,
    currentDifficulty: null,
    currentCaseId: null,
    answers: [],
    status: 'idle'
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setDifficulty(state, action: PayloadAction<Difficulty>) {
            state.currentDifficulty = action.payload;
            state.currentCaseId = null;
        },
        selectCase(state, action: PayloadAction<string>) {
            state.currentCaseId = action.payload;
        },
        answerCase(
            state,
            action: PayloadAction<{caseId: string; chosenSuspectId: string}>
        ) {
            const {caseId, chosenSuspectId} = action.payload;
            const gameCase = state.cases.find((c) => c.id === caseId)
            if (!gameCase) return;

            const guilty = gameCase.suspects.find((s) => s.isGuilty)
            const isCorrect = guilty?.id === chosenSuspectId

            const answer: CaseAnswer = {
                caseId,
                chosenSuspectId,
                isCorrect,
                difficulty: gameCase.difficulty,
            }

            const existingIndex = state.answers.findIndex((a) => a.caseId === caseId);
            if (existingIndex >= 0) {
                state.answers[existingIndex] = answer;
            } else {
                state.answers.push(answer)
            }
        },
    },
});

export const {setDifficulty, selectCase, answerCase} = gameSlice.actions;
export default gameSlice.reducer;