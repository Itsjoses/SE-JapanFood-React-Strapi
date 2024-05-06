interface ProductAttribute{
    background: string,
    title: string,
    price: number,
    children:React.ReactNode
}

export default function ProductCard({background, title, price, children} : ProductAttribute) {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-64 w-auto bg-black flex items-center">
        <img
          src={background}
          alt=""
          className="object-cover align-middle w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">{title}</p>
        <p>$ {price}</p>
      </div>
      <p>
        {children}
      </p>
      <div className="bg-custom-orange w-fit ">
        <button className="py-2 px-8 text-white">Add To Cart</button>
      </div>
    </div>
  );
}
