import CasesList from "../features/game/components/CasesList";
import CaseView from "../features/game/components/CaseView";
import DifficultySelector from "../features/game/components/DifficultySelector";

export default function PlayPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Играть</h1>
            <DifficultySelector/>
            <CasesList/>
            <CaseView/>
        </div>
    )
}