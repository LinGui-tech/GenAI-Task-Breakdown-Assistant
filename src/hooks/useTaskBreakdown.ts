import { useState } from "react";
import { breakdownTask } from "../api/openai";

export function useTaskBreakdown() {
    const [steps, setSteps] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const run = async (task: string) => {
        setLoading(true);
        setError(null);

        try {
            const result = await breakdownTask(task);
            setSteps(result);
        } catch {
            setError("Failed to generate task breakdown.");
        } finally {
            setLoading(false);
        }
    };

    return { steps, loading, error, run };
}
