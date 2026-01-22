import StepCard from "./StepCard";

interface Props {
  steps: string[];
}

export default function TaskSteps({ steps }: Props) {
  return (
    <div className="space-y-3 mt-4">
      {steps.map((step, i) => (
        <StepCard key={i} index={i} text={step} />
      ))}
    </div>
  );
}
