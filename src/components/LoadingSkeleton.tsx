export default function LoadingSkeleton() {
    return (
        <div className="animate-pulse space-y-2 mt-4">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
    );
}
