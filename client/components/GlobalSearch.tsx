interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function GlobalSearch({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search stocks..."
      className="px-3 py-2 border rounded-md bg-surface border-border text-sm"
    />
  );
}
