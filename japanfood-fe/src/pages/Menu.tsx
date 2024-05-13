import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import DynamicLayout from "../components/layouts/DynamicLayout";
import ProductCard from "../components/cards/ProductCard";
import { apiFood } from "../api/food";

interface FoodType {
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function Menu() {
  const [datas, setData] = useState<FoodType[]>();
  const [category,setCategory] = useState<string>("Sushi")
  useEffect(() => {
    const FoodCategory = async () => {
      const responseData = await apiFood(category);

      const formattedData = responseData.map((data: any) => ({
        title: data.attributes.food_name,
        price: data.attributes.Price,
        description: data.attributes.Description,
        image: data.attributes.food_image.data.attributes.url,
      }));
      
      setData(formattedData);
    };

    FoodCategory();
  }, [category]);

  const handleChange = (categoryName: string) => {
    setCategory(categoryName)
  }

  return (
    <div>
      <Header menu="Menu" />
      <div className="bg-sushi-packet bg-cover bg-no-repeat bg-center relative before:w-full before:absolute before:h-full before:z-10 z-20 before:bg-gradient-to-b before:from-black before:to-transparent before:from-5% before:to-70%">
        <div className="p-28 z-50 relative flex justify-center items-center text-white flex-col">
          <div className="w-2/5 text-center flex flex-col gap-8">
            <p className="lg:text-5xl md:text-4xl text-3xl font-Merienda">MENU</p>
            <p className="lg:text-base md:text-sm text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              laudantium dicta quibusdam illum quas impedit tempore totam,
              consectetur ea delectus velit? Deleniti exercitationem odio illum
              quas sunt corrupti. Mollitia, quibusdam?
            </p>
          </div>
        </div>
      </div>

      <DynamicLayout border={false}>
        <div className="my-20">
          <div className=" flex justify-center items-center xl:gap-28 lg:gap-24 md:gap-16 gap-12 my-20">
            <p className={category === "Sushi" ? "text-orange-500" : '' + "hover:text-custom-orange hover:cursor-pointer"} onClick={() => handleChange("Sushi")}>Sushi</p>
            <p className={category === "Ramen" ? "text-orange-500" : '' + "hover:text-custom-orange hover:cursor-pointer"} onClick={() => handleChange("Ramen")}>Ramen</p>
            <p className={category === "Appetizer" ? "text-orange-500" : '' + "hover:text-custom-orange hover:cursor-pointer"} onClick={() => handleChange("Appetizer")}>Appetizer</p>
            <p className={category === "Drinks" ? "text-orange-500" : '' + "hover:text-custom-orange hover:cursor-pointer"} onClick={() => handleChange("Drinks")}>Drinks</p>
          </div>
          <div className="flex justify-center">
            <div className="lg:w-8/12 md:w-10/12 w-11/12">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {datas &&
                  datas.map((data) => (
                    <ProductCard
                      background={
                        `${import.meta.env.VITE_API_URL}${data.image}`
                      }
                      title={data.title}
                      price={data.price}
                    >
                      {data.description}
                    </ProductCard>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
