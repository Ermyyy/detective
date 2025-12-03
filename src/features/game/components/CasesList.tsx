import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectCase } from "../gameSlice";

export default function CasesList() {
    const dispatch = useAppDispatch();
    const {cases, currentDifficulty, currentCaseId} = useAppSelector(
        (state) => state.game
    )

    const filtered = currentDifficulty ? cases.filter((c) => c.difficulty === currentDifficulty) : []
    if (!currentDifficulty) {
        return (
        <p className="text-slate-300 mb-4">
            Выбери сложность, чтобы увидеть список дел.
        </p>
        );
    }

    if (!filtered.length) {
        return (
            <p className="text-slate-300 mb-4">
                Для этой сложности пока нет дел.
            </p>
        );
    }
    
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((c) => (
                <button key={c.id}   onClick={() => dispatch(selectCase(c.id))}
                className={`text-left p-4 rounded-xl border transition-colors ${
                    currentCaseId === c.id
                    ? 'border-emerald-500 bg-slate-900'
                    : 'border-slate-700 bg-slate-800 hover:bg-slate-700'
                }`}>
                    <h3 className="font-semibold mb-1">{c.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{c.summary}</p>
                </button>
            ))}
        </div>
    )
}