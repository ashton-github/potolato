import AxiosService from "./AxiosService";

let saveToken = (token) => {
    localStorage.setItem('token', token);
}

let getToken = () => {
    let token = localStorage.getItem('token');
    return token;
}

let saveRole = (role) => {
    localStorage.setItem('role', role);
}
let logout = () => {
    localStorage.clear();
}
let isLgged = () => {
    let token = localStorage.getItem('token');
    return !!token;
}
let isLggedAsAdmin = () => {
    let role = localStorage.getItem('role');
    return isLgged() && (role === "ROLE_ADMIN") ;
}
let isLggedAsUser = () => {
    let role = localStorage.getItem('role');
    return isLgged() && (role === "ROLE_USER") ;
}

let login =(Credential) => {
    return AxiosService.post("/auth/signin", Credential);
}

export const account_services ={
    saveToken, logout, isLgged, saveRole, isLggedAsAdmin, isLggedAsUser, login, getToken
}
