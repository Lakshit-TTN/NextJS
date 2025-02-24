import React from 'react';
interface ProductCardInterface {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
}

export const getServerSideProps = async ({ params }:{ params: { id: string } }) => {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return {
        props:
            { product:data }  //always pass as props
    };
}

const ProductList: React.FC<{ product: ProductCardInterface }> = ({ product }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <div key={product.id} className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white">
                <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-bold">Rs.{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
