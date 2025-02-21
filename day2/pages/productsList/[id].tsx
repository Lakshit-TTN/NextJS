"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
interface ProductInterface {
    id: number;
    image_url: string;
    name: string;
    price: number;
    description: string;
}
const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<ProductInterface | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchProduct = async () => {
            try {
                const res = await fetch('/data.json');
                const data = await res.json();
                const productByID = data.products.find((product: ProductInterface) => product.id === Number(id));
                setProduct(productByID);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);
    return product ? (
        <div className="flex flex-col items-center p-6">
            <div className="relative w-96 h-96">
                <Image src={product.image_url} alt={product.name} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <span className="text-xl font-semibold mt-3">Rs.{product.price}</span>
        </div>
    ) : null;
};
export default ProductDetail;
