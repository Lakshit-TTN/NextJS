import Image from "next/image";


async function getRandomImage() {
  const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products[0].images[0]; 
}

export default async function ImagePage() {
  const imageUrl = await getRandomImage();

  return (
    <div>
        <Image
          src={imageUrl}
          alt="mascara"
          height={400}
          width={400}
          className="object-cover rounded-lg"
        />
    </div>
  );
}
