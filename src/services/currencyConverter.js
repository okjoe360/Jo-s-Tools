import axios from "axios";
import Constants from './constants'

let constants = new Constants();

export default class CurrencyConverter{
    async getDirectCurrencyConv(from_currency, to_currency, amount){
        try{
            const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
            if(res.status === 200){
                const rate = res.data.rates[to_currency]
                const result = amount * rate
                return {rate, result}
            }
            console.log(res)
        }catch(error){
            console.error(error)
        }
    }

    async getCurrencyConv(){
        try{
            const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
            
        }catch(error){
            console.error(error)
        }
    }
}