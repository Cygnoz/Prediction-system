import  BaseURL  from "./BaseURL";
import { commonAPI } from "./commonAPI";
//login API

export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BaseURL}/api/login`,user,"")
}

export const AddDrawAPI = async (newDraw) => {
  return await commonAPI("POST", `${BaseURL}/api/add_data`,newDraw,"")
}

export const GetDrawAPI = async () => {
  return await commonAPI("GET", `${BaseURL}/api/get_data`,"")
}

export const GetPredictAPI = async () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const url = `${BaseURL}/api/get_predict?date=${today}`;
  return await commonAPI("GET", url, "");
}

export const GetAccuracyAPI = async () => {
  return await commonAPI("GET",`${BaseURL}/api/get_accuracy`)
}