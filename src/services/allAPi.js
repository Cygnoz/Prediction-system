import { BaseURL } from "./BaseURL";
import { commonAPI } from "./commonAPI";
//login API

export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BaseURL}/api/login`,user,"")
}

export const AddDrawAPI = async (newDraw) => {
  return await commonAPI("POST", `${BaseURL}/api/add_data`,newDraw,"")
}