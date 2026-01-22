interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function TaskInput({ value, onChange }: Props) {
  return (
    <textarea
      className="w-full border rounded p-3"
      rows={4}
      placeholder="Describe the task you want to break down..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
