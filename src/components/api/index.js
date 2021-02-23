import axios from "axios";

const URL = "exampleurl";

export default function fetch(url, data = {}, method = "GET" ) {
    if(method === "GET") {
        return axios.get(URL+url, {params: data});
    } else 
        return axios.post(URL+url, data);
}