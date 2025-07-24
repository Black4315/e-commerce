import { cn } from "@/lib/utils";

const ErrorOffers = ({ refetch, className }: { refetch: () => void; className?:string;}) => {
  return (
    <div className={cn('pt-4 md:pt-10 lg:ps-10 w-full overflow-hidden md:h-[344px] box-content', className)}>
      <div className="max-lg:rounded-lg w-full h-full bg-danger-500 flex flex-col items-start justify-center px-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-white/80 mb-4">
          We couldn't load the latest offers. Please try again later.
        </p>
        <button
          onClick={() => refetch()} // if using useQuery
          className="bg-white text-danger-500 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Retry
        </button>
      </div>
    </div>

  )
}

export default ErrorOffers