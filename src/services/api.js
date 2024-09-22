import axios from "axios";
import Constants from "./constants";

let constants = new Constants();

axios.create({
    baseURL:constants.base_url,
    timeout:2000,
})

export default class Api{
    async create(url, data){
        try{
            const res = await axios.post(url, data)
            return res.data
        }catch(error){
            console.error(error);
            return error
        }
    }

    async query(short_link){
        try{
            const res = await axios.get(`${constants.short_link_url}?q=${short_link}`)
            return res.data
        }catch(error){
            console.error(error);
            return error
        }
    }

    async currency_conv(data){
        try{
            const res = await axios.post(constants.currency_conv_url, data)
            return res.data
        }catch(error){
            console.error(error);
            return error
        }
    }

    async currency_conv_get(fromUnit, toUnit, inputValue){
        try{
            const res = await axios.get(`${constants.currency_conv_url}?from_currency=${fromUnit}&to_currency=${toUnit}&amount=${inputValue}`)
            if(res.status && res.status === 'success'){
                return res.message
            }
            return null
        }catch(error){
            console.error(error);
            return error
        }
    }

    async testCurrencyConv(){
        try{
            const res = await axios.get("https://tools.joelokoniha.com/api/v1/currency-converter-api/?from_currency=USD&to_currency=NGN&amount=1000")
            console.log(res);
            return res
        }catch(error){
            console.error(error);
        }
    }

    async getShortenedData(shortCode){
        try{
            const res = await axios.get()
        }catch(error){
            console.error(error);
        }
    }

    async createContact(data){
        try{
            const res = await axios.post(constants.contact_us_url, data);
            return res
        }catch(error){
            console.error(error);
        }
    }
}