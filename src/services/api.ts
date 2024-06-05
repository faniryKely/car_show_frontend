import axios from "axios";
import {CarSearchParams, CarSearchResult} from "../types";

const API_URL = "http://localhost:8080/car_show/car";

export const searchCars = async (params: CarSearchParams): Promise<CarSearchResult> => {
    try {
        const response = await axios.get<CarSearchResult>(API_URL, {params});
        return response.data;
    } catch (error) {
        console.error('Failed to search cars:', error);
        throw error;
    }
};