import React, { useEffect, useState } from 'react';

interface ProductInterface {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

const ProductsData: React.FC = () => {
  const [data, setData] = useState<ProductInterface[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data.products.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center p-4">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Id</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Title</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Description</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Category</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-sm text-gray-700">{product.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{product.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{product.description}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{product.category}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>    </div>
  );
};

export default ProductsData;
