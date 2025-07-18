"use client"
import { productType } from '@/features/SectionProduct/types/productType';
import ProductCard from './ProductCard';

const ProductCards = ({
    data,

}: {
    data?: productType[];
}) => {

    return (
        <div className='flex gap-8 overflow-hidden'>
            {data && data.map((props)=>(
                <ProductCard key={props.id} {...props} />
            ))}
        </div>
    )
}

export default ProductCards