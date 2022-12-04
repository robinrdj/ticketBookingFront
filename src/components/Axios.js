import axios from 'axios';
 
export const setAuthToken = token => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
}

const local = "http://localhost:5000/"
const aws = "https://w4rflhwkopoqmjfy6aa4d2ocwq0ovjhc.lambda-url.ap-northeast-1.on.aws/";
const instance = axios.create({
    baseURL:aws,
    headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
        }
});

export default instance;