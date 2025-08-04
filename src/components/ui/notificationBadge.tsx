import { formatCount } from "@/utils"

const NotificationBadge = ({ notificationsLen }: { notificationsLen: number }) => {
    return (
        <div className='min-w-3.5 max-h-3.5 max-w-fit bg-secondary-3 absolute top-0.75 end-0.75 rounded-full text-[10px] px-1 font-medium text-text-1 flex-center group-hover:bg-white group-hover:text-secondary-3 group-hover:border transition-apple pointer-events-none'>
            {formatCount(notificationsLen)}
        </div>
    )
}

export default NotificationBadge