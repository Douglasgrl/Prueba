import { apiUrls } from "../../config";
import { axiosInstance } from "../actions/auth";

export const getCharacters = async () => {
  try {
    const response = await axiosInstance.get(apiUrls.getCharacters());
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
