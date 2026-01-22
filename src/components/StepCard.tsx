interface Props {
    index: number;
    text: string;
}

export default function StepCard({ index, text }: Props) {
    return (
        <div className="border rounded p-4 bg-white shadow-sm">
            <div className="font-semibold mb-1">Step {index + 1}</div>
            <p className="text-gray-700">{text}</p>
        </div>
    );
}
