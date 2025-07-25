
const NotificationBadge = ({ notificationsLen }: { notificationsLen: number }) => {
    return (
        <div className='w-3.5 h-3.5 sm:w-4 sm:h-4 bg-secondary-3 absolute top-0.5 end-0.5 rounded-full text-xs text-text-1 flex-center   group-hover:bg-white group-hover:text-secondary-3 group-hover:border transition-all'>
            {notificationsLen}
        </div>
    )
}

export default NotificationBadge