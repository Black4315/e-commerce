const StatCard = ({
  icon,
  value,
  description,
  isHighlighted = false,
}: {
  icon: React.ReactNode;
  value: string;
  description: string;
  isHighlighted?: boolean;
}) => {
  const cardClasses = isHighlighted
    ? " bg-secondary-3 text-white p-6 rounded-lg flex flex-col items-center justify-center space-y-4 text-center shadow-[0px_2px_10px_2px_rgba(0,0,0,0.2)] min-h-55"
    : "bg-white p-6 rounded-lg flex flex-col items-center justify-center space-y-4 text-center border border-border min-h-55";

  const iconContainerClasses = isHighlighted
    ? "bg-white w-20 h-20 rounded-full border-[10px] text-black border-[#c1c0c1] flex-center"
    : "bg-black w-20 h-20 rounded-full border-[10px] text-text-1 border-[#c1c0c1] flex-center";

  const descriptionClasses = isHighlighted ? "text-text-1" : "text-black";

  return (
    <div className={cardClasses}>
      <div className={iconContainerClasses}>{icon}</div>
      <span className={`text-2xl md:text-3xl font-bold tracking-wide md:tracking-wider ${isHighlighted?"text-text-1":"text-black "}`}>{value}</span>
      <p className={descriptionClasses}>{description}</p>
    </div>
  );/* FREE AND FAST DELIVERY */
};

export default StatCard;    