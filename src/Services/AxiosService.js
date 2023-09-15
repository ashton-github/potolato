import axios from "axios";
import {account_services} from "./account_services";

const AxiosService = axios.create({
    baseURL:"http://localhost:8080/api"
});

/**
 * intercept req to add token
 */

AxiosService.interceptors.request.use(request => {
    if(account_services.isLgged()) {
         request.headers.Authorization = 'Bearer ' + account_services.getToken()
    }

    return request;

})


AxiosService.interceptors.response.use(res => {
    return res;
},error => {
    if(error.response.status === 401){
        account_services.logout();
        Window.location ="/auth/login"
    }else {
        return Promise.reject(error)
    }
})

export default AxiosService;
