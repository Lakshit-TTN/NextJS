"use client";
import React, { useEffect, useState } from 'react';

interface ProductCardInterface {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
}

const ProductList: React.FC = () => {
    const [productData, setProductsData] = useState<ProductCardInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProductsData(data.products);
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {productData.map((product) => (
                <div key={product.id} className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white">
                    <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <p className="text-gray-600 text-sm">{product.category}</p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xl font-bold">Rs.{product.price}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
