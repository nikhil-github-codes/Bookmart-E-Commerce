
import axios from "axios";
import { API_CONSTANTS } from '../Config/Config';
import { selectToken } from "../Store/Slice/AuthSlice";
import {store}from '../Store/index'

var commonHeaders = {
    'Content-Type': "application/json",
    "Authorization": "",
};

class FetchDataService {
    // async mobileotp(data) {

    //     const token = selectToken(store.getState());
    //     commonHeaders = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "", }

    //     return axios.post(`${API_CONSTANTS.BASE_URL}/signin/mobile/generate-otp`, data, { headers: commonHeaders });
    // }
    

    // async signup(data){
    //     const token=""
    //     commonHeaders = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "", }
    //    return axios.post(`${API_CONSTANTS.BASE_URL}/user/register`, data, { headers: commonHeaders });
    // }

    async signup(data) {
        const token = ""; // Initialize or get your token here
        const headers = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "" };

        try {
            const response = await axios.post(`${API_CONSTANTS.BASE_URL}/user/register`, data, { headers });
            return response.data; // Return the response data
        } catch (error) {
            throw error; // Re-throw the error to handle it in the calling code
        }
    }
    async login(data) {
        const token = ""; // Initialize or get your token here
        const headers = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "" };

        try {
            const response = await axios.post(`${API_CONSTANTS.BASE_URL}/user/login`, data, { headers });
            return response.data; // Return the response data
        } catch (error) {
            throw error; // Re-throw the error to handle it in the calling code
        }
    }
    async categorylist() {
        const token =  selectToken(store.getState()); 
        const headers = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "" };

        try {
            const response = await axios.get(`${API_CONSTANTS.BASE_URL}/category/list`,{ headers });
            return response.data; 
        } catch (error) {
            throw error; 
        }
    }

    async subcategorylist(id) {
        const token =  selectToken(store.getState()); 
        const headers = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "" };

        try {
            const response = await axios.get(`${API_CONSTANTS.BASE_URL}/subcategory/listByCateID/${id}`,{ headers });
            return response.data; 
        } catch (error) {
            throw error; 
        }
    }

    async bookslist(id) {
        const token =  selectToken(store.getState()); 
        const headers = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "" };

        try {
            const response = await axios.get(`${API_CONSTANTS.BASE_URL}/product/listByCate/${id}`,{ headers });
            return response.data; 
        } catch (error) {
            throw error; 
        }
    }

    async cart(data) {

        // console.log("commonHeaders",commonHeaders)
        const token = selectToken(store.getState());
        // console.log("token",token)
        commonHeaders = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "", }
    
        // console.log("commonHeaders",commonHeaders)

        try {
            const response = await axios.post(`${API_CONSTANTS.BASE_URL}/cart/create`, data, { headers: commonHeaders });
            return response.data; 
        } catch (error) {
            throw error; 
        }
    
       // return axios.post(`${API_CONSTANTS.BASE_URL}/cart/create`, data, { headers: commonHeaders });
      }


      async getuser(data) {

        // console.log("commonHeaders",commonHeaders)
        const token = selectToken(store.getState());
        // console.log("token",token)
        commonHeaders = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "", }
    
        // console.log("commonHeaders",commonHeaders)
    
        // return axios.get(`${API_CONSTANTS.BASE_URL}/user/list`,{ headers: commonHeaders });

        try {
            const response = await axios.get(`${API_CONSTANTS.BASE_URL}/user/list`,{ headers:commonHeaders });
            return response.data; 
        } catch (error) {
            throw error; 
        }
      }

      async getcart(data) {

        // console.log("commonHeaders",commonHeaders)
        const token = selectToken(store.getState());
        // console.log("token",token)
        commonHeaders = { ...commonHeaders, "Authorization": token ? 'Bearer ' + token : "", }
    
        try {
            const response = await axios.get(`${API_CONSTANTS.BASE_URL}/cart/list`,{ headers:commonHeaders });
            return response.data; 
        } catch (error) {
            throw error; 
        }
      }


    


}


  
export default new FetchDataService();
