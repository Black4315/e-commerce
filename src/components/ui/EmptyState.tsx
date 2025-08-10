export default function EmptyState({ title, description, icon }:
    { title: string; description?: string; icon?: string | React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center text-center py-12 text-gray-500">
            {icon && <div className="text-4xl mb-3">{icon}</div>}
            <h2 className="text-lg font-semibold">{title}</h2>
            {description && <p className="text-sm mt-1">{description}</p>}
        </div>
    );
}