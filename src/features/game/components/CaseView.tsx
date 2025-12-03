import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { answerCase } from '../gameSlice';

export default function CaseView() {
    const dispatch = useAppDispatch();
    const { cases, currentCaseId, answers } = useAppSelector((s) => s.game);
    const [selectedSuspectId, setSelectedSuspectId] = useState<string | null>(
        null
    );

    const gameCase = useMemo(
        () => cases.find((c) => c.id === currentCaseId),
        [cases, currentCaseId]
    );

    if (!gameCase) {
        return (
        <p className="text-slate-300 mt-4">
            Выберите дело из списка, чтобы начать расследование.
        </p>
        );
    }

    const existingAnswer = answers.find((a) => a.caseId === gameCase.id);

    const handleSubmit = () => {
        if (!selectedSuspectId) return;
        dispatch(
            answerCase({caseId: gameCase.id, chosenSuspectId: selectedSuspectId})
        )
    }

    return (
        <div className="mt-6 grid md:grid-cols-[2fr,1fr] gap-6">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <h2 className="text-lg font-semibold mb-2">{gameCase.title}</h2>
                <p className="text-sm text-slate-300 mb-4">{gameCase.summary}</p>
                <h3 className="font-semibold mb-1">Факты</h3>
                <ul className="list-disc list-inside text-sm text-slate-200 mb-4">
                    {gameCase.facts.map((f) => (<li key={f}>{f}</li>))}
                </ul>
                <h3 className="font-semibold mb-1">Улики</h3>
                <ul className="space-y-2 mb-2">
                    {gameCase.clues.map((clue) => (
                        <li key={clue.id} className="text-sm">
                        <span className="font-medium">{clue.title}: </span>
                        {clue.description}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <h3 className="font-semibold mb-3">Подозреваемые</h3>
                <div className="space-y-3 mb-4">
                    {gameCase.suspects.map((s) => (
                        <button
                        key={s.id}
                        onClick={() => setSelectedSuspectId(s.id)}
                        className={`w-full text-left p-3 rounded-lg border text-sm transition-colors ${
                            selectedSuspectId === s.id
                            ? 'border-emerald-500 bg-slate-900'
                            : 'border-slate-700 bg-slate-900/40 hover:bg-slate-900/70'
                        }`}
                        >
                        <div className="font-semibold">{s.name}</div>
                        <div className="text-xs text-slate-400">{s.description}</div>
                        {s.motive && (
                            <div className="text-xs text-slate-400 mt-1">
                            Мотив: {s.motive}
                            </div>
                        )}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={!selectedSuspectId}
                    className="w-full px-4 py-2 rounded-lg bg-emerald-500 disabled:bg-slate-700 text-sm font-semibold"
                    >
                    Вынести вердикт
                </button>
                {existingAnswer && (
                    <div className="mt-4 text-sm">
                        <div
                        className={
                            existingAnswer.isCorrect
                            ? 'text-emerald-400'
                            : 'text-rose-400'
                        }
                        >
                        {existingAnswer.isCorrect
                            ? 'Верно! Вы разгадали дело.'
                            : 'Неверно. Попробуйте ещё раз или прочтите объяснение ниже.'}
                        </div>
                        <details className="mt-2 text-slate-300">
                        <summary className="cursor-pointer text-xs underline">
                            Показать объяснение
                        </summary>
                        <p className="mt-2 text-xs">{gameCase.solutionExplanation}</p>
                        </details>
                    </div>
                )}
            </div>
        </div>
    )
}