import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskSteps from "../components/TaskSteps";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useTaskBreakdown } from "../hooks/useTaskBreakdown";

export default function Home() {
  const [task, setTask] = useState("");
  const { steps, loading, error, run } = useTaskBreakdown();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        GenAI Task Breakdown Assistant
      </h1>

      <TaskInput value={task} onChange={setTask} />
      <div className="flex justify-between items-center mt-3">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => run(task)}
          disabled={!task || loading}
        >
          Generate
        </button>
      </div>

      {loading && <LoadingSkeleton />}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {steps.length > 0 && <TaskSteps steps={steps} />}
    </div>
  );
}
