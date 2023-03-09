import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

//https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
//APIKEY: 51570eafab55fff0cc2a97e5a48154e6



export class TVShowAPI {
    static async fetchPopulars(){
        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        // console.log (response.data.results)
        // return response.data.results;
        return FAKE_POPULARS;
    }

}