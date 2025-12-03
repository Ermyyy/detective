import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setDifficulty } from "../gameSlice";
import type { Difficulty } from "../types";

const difficulties: { value: Difficulty; label: string }[] = [
  { value: 'easy', label: 'Лёгкий' },
  { value: 'medium', label: 'Средний' },
  { value: 'hard', label: 'Сложный' },
];

export default function DifficultySelector() {
    const dispatch = useAppDispatch();
    const current = useAppSelector((s) => s.game.currentDifficulty);
    const base = 'px-4 py-2 rounded-xl border text-sm font-medium transition-colors';

    return (
        <div className="flex gap-3 mb-4">
            {difficulties.map((d) => (
                <button key={d.value} onClick={() => dispatch(setDifficulty(d.value))} className={`${base} ${current === d.value ? 'bg-emerald-500 border-emerald-400 text-white': 'bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-700'}`}>
                    {d.label}
                </button>
            ))}
        </div>
    )
}