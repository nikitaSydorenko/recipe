import axios from "axios";


export const request = (url) => axios.get(url)
    .then(response => {
        return response
    })
    .catch(error => console.log('error:', error));