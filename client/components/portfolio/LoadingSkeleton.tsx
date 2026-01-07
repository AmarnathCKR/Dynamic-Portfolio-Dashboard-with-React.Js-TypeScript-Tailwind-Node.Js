export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-32 rounded-md bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  );
}
