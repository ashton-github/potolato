import AxiosService from "./AxiosService";

let getAllUsers = () => {
    return AxiosService.get('/user/getAll');
}

let getUser = (userId) => {
    return AxiosService.get('/user/getById/'+userId);
}

let addUser = (user) => {
    return AxiosService.post('/user/create/', user);
}

let editUser = (userId,user) => {
    return AxiosService.put('/user/modify/'+userId, user);
}

let deleteUser = (userId) => {
    return AxiosService.delete('/user/delete/'+userId);
}

export const userService ={
    getAllUsers, getUser, editUser, deleteUser, addUser
}
