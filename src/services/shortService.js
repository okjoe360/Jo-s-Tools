import axios from "axios";
import Constants from "./constants";

let constants = new Constants();

export default class ShorteningService{
    async create(section, data){
        const url = constants.getLinkType(section)
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
            const res = await axios.get(`${constants.search}?c=${short_link}`)
            return res.data
        }catch(err){
            console.error(err);
            return err
        }
    }
}