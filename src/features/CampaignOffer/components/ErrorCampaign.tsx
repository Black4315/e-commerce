import ErrorOffers from '@/features/OffersSlider/components/ui/ErrorOffers'
import React from 'react'

// Extract the prop types from ErrorOffers
type ErrorOffersProps = React.ComponentProps<typeof ErrorOffers>;

const ErrorCampaign: React.FC<ErrorOffersProps> = (props) => {
    return <ErrorOffers {...props} className='!p-0 !h-[500px]'/>;
};

export default ErrorCampaign;