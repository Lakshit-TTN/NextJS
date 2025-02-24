import React from 'react';
interface ProductCardInterface {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
}
export const getServerSideProps = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return {
        props: { products: data.products } //always pass as props
    };
}

const ProductList: React.FC<{ products: ProductCardInterface[] }> = ({products}) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
                <div key={product.id} className="group border rounded-2xl shadow-lg p-6 max-w-xs bg-white transition-all hover:scale-105 hover:shadow-2xl focus-within:ring-2 focus-within:ring-indigo-500" tabIndex={0} >
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
