'use client'

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        'id': 1,
        'url': 'https://images.pexels.com/photos/2377000/pexels-photo-2377000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        'id': 2,
        'url': 'https://images.pexels.com/photos/2608502/pexels-photo-2608502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        'id': 3,
        'url': 'https://images.pexels.com/photos/2204008/pexels-photo-2204008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        'id': 4,
        'url': 'https://images.pexels.com/photos/7386011/pexels-photo-7386011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]

const ProductsImage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
            <div className="w-1/2 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsImage;
