// src/features/game/types.ts

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Suspect {
  id: string;
  name: string;
  description: string;
  motive?: string;
  alibi?: string;
  isGuilty: boolean;
}

export interface Clue {
  id: string;
  title: string;
  description: string;
  relatedSuspectIds?: string[];
}

export interface Case {
  id: string;
  title: string;
  difficulty: Difficulty;
  summary: string;
  facts: string[];
  clues: Clue[];
  suspects: Suspect[];
  solutionExplanation: string;
  hints?: string[];
  timeLimitSeconds?: number;
}

export interface CaseAnswer {
  caseId: string;
  chosenSuspectId: string;
  isCorrect: boolean;
  difficulty: Difficulty;
}

export interface GameState {
  cases: Case[];
  currentDifficulty: Difficulty | null;
  currentCaseId: string | null;
  answers: CaseAnswer[];
  status: 'idle' | 'loading' | 'error';
  usedHints: Record<string, number>;
}
