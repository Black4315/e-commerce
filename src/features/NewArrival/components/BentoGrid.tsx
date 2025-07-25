import { BentoGridItem, BentoGrid } from '@/components/ui/bento-grid'
import React from 'react'
import { BentoGridItemType, } from '../types'

const BentoGridItems = ({ NewArrival }: { NewArrival?: BentoGridItemType[] }) => {
    return (
        <BentoGrid>
            {NewArrival?.map((item, i) => (
                <BentoGridItem
                    id={item.id}
                    key={i}
                    title={item.title}
                    description={item.description}
                    className={``}
                    href={item.redirect}
                    img={item.image}
                />
            ))}
        </BentoGrid>
    )
}

export default BentoGridItems