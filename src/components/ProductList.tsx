import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20157647/pexels-photo-20157647/free-photo-of-vintage-tram-on-the-street-of-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-dev text-dev py-2 w-max px-4 text-xs hover:bg-dev hover:text-white">Add To Cart</button>
      </Link>

      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20157647/pexels-photo-20157647/free-photo-of-vintage-tram-on-the-street-of-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-dev text-dev py-2 w-max px-4 text-xs hover:bg-dev hover:text-white">Add To Cart</button>
      </Link>

      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20157647/pexels-photo-20157647/free-photo-of-vintage-tram-on-the-street-of-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-dev text-dev py-2 w-max px-4 text-xs hover:bg-dev hover:text-white">Add To Cart</button>
      </Link>

      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/26997905/pexels-photo-26997905/free-photo-of-woman-running-in-golden-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20157647/pexels-photo-20157647/free-photo-of-vintage-tram-on-the-street-of-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Product description</div>
        <button className="rounded-2xl ring-1 ring-dev text-dev py-2 w-max px-4 text-xs hover:bg-dev hover:text-white">Add To Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
