import { formatCount } from "@/utils"

const NotificationBadge = ({ notificationsLen }: { notificationsLen: number }) => {
    return (
      <div
        className={`min-w-3.5 max-h-3.5 max-w-fit bg-secondary-3 absolute top-0.75 end-0.75 rounded-full text-[10px] px-1 font-medium text-text-1 flex-center group-hover:bg-white group-hover:text-secondary-3 group-hover:border group-data-[selected=true]:text-secondary-3 transition-apple pointer-events-none group-data-[selected=true]:bg-white group-data-[selected=true]:border`}
      >
        {formatCount(notificationsLen)}
      </div>
    );
}

export default NotificationBadge