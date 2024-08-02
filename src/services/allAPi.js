import BaseURL from "./BaseURL";
import { commonAPI } from "./commonAPI";

// Login API
export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BaseURL}/api/login`, user, "")
}

// Add other APIs as necessary
export const AddDrawAPI = async (newDraw) => {
  return await commonAPI("POST", `${BaseURL}/api/add_data`, newDraw, "")
}

export const GetDrawAPI = async () => {
  return await commonAPI("GET", `${BaseURL}/api/get_data`, "")
}

export const GetPredictAPI = async (date) => {
  const url = `${BaseURL}/api/get_predict?date=${date}`;
  return await commonAPI("GET", url, "");
}

export const GetAccuracyAPI = async () => {
  return await commonAPI("GET", `${BaseURL}/api/get_accuracy`)
}

export const GetTodayPredictAPI = async (date) => {
  return await commonAPI("GET", `${BaseURL}/api/get_predict`, "");
}

export const GetPredictedDataAPI = async () => {
  return await commonAPI("GET", `${BaseURL}/api/get_predict_data`)
}
