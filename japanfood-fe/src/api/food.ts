import { axiosHttpRequest } from "../libs/api";

export const apiFood = async(categoryName: string) => {
    try {   
        const responseData = await axiosHttpRequest({
            endpoint: `/api/categories?filters[category][$contains]=${categoryName}&populate=foods.food_image`,
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          });
        return responseData.data.data[0].attributes.foods.data
    } catch (error) {
        throw error
    }
}
