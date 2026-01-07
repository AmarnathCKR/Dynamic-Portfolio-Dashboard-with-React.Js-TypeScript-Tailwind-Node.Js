interface Props {
  onRetry: () => void;
}

export default function ErrorBanner({ onRetry }: Props) {
  return (
    <div className="p-4 border border-red-300 bg-red-50 rounded-md flex justify-between">
      <span>Failed to load portfolio data.</span>
      <button
        onClick={onRetry}
        className="px-3 py-1 border rounded-md"
      >
        Retry
      </button>
    </div>
  );
}
