"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ProductCardInterface {
    id: number;
    image_url: string;
    name: string;
    price: number;
    description: string;
}
const ProductList: React.FC = () => {
    const [productData, setProductsData] = useState<ProductCardInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setProductsData(data.products);
        };
        fetchData();
    }, []);
    return (
        <div>
            {productData.map((product) => (

                <div key={product.id} className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white">
                    <div className="relative w-full h-48">
                        <Image src={product.image_url} alt={product.name} layout="fill" objectFit="cover" className="rounded-xl"/>
                    </div>
                    <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xl font-bold">Rs.{product.price}</span>
                    </div>
                </div>

            ))}
        </div>
    )
};

export default ProductList;
