import axios from "axios";
import  { useEffect, useState } from "react";

interface Foods{
  FoodName: string,
  Description: string,
  Image: string
}

export default function Map() {

  const [food,setFood] = useState<Foods[]>([])

  useEffect(() => {
    const getCategory = async() =>{
      try {
        const response = await axios.get(`http://localhost:1337/api/foods?populate=*`, {
          headers: {
            Accept: "application/json",
          },
        });

        const bookData: Foods[] = response.data.data.map((data: any) => ({
          FoodName: data.attributes.food_name,
          Description: data.attributes.Description,
          Image: data.attributes.food_image.data.attributes.url
        }));
        
        setFood(bookData)
      } catch (error) {
        throw error;
      }

    }
    
    getCategory()
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
        {food.map((e) =>(
          <div>
          <img src={"http://localhost:1337"+e.Image} alt="" />
          <p>{"http://localhost:1337/"+e.Image}</p>
          <p>{e.Image}</p>
          <p>{e.Description}</p>
          </div>
        )
        )}
    </div>
  );
}
