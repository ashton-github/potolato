import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {userService} from "../../../Services";

const User = () => {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const flag = useRef(false);

    useEffect(() => {

        /**
         *pour controler l'execution au debut de creation
         * */
        if(flag.current===true) {
        userService.getAllUsers()
                .then(res => {
                    setUsers(res.data);
                    setLoad(true);
                })
                .catch(error => console.log(error));
        }
        return () => flag.current = true;

    },[]);

    const editUser = (userId) => {
      console.log("clicked for user " + userId);
      navigate("../edit/"+userId, {replace: true})
    }

    const formatDate = (date) => {
        let theDate = new Date(date)
        return theDate.getDate()+"-"+theDate.getMonth()+"-"+theDate.getFullYear()
    }


    function deleteUser(userId) {
        userService.deleteUser(userId)
            .then(res => {
                setUsers((current)=> current.filter(user => user.id !== userId))
            })
            .catch(error => console.log(error))
        return undefined;
    }

    const userList = () => users.map((user) =>
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{formatDate(user.creationDate)} </td>
            <td style={{display: "flex"}}>
                <button onClick={()=>editUser(user.id)}>Modifier</button>
                {user.roles[0].name !== "ROLE_ADMIN" ? <button onClick={()=>deleteUser(user.id)}>Supprimer</button> :""}
            </td>
        </tr>
    );

if(!isLoad){
    return <div>Loading ...</div>
}
return (
        <div className="User">
            <div style={{display: "flex" , "justify-content" : "space-between" , "align-items" : "center"}} >
                <h2>La liste des utilisateurs :</h2>
                <button onClick={()=> navigate("../add/", {replace: true})} style={{ width: 100 , height : 30 , margin : 30}}>Ajouter</button>

            </div>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>#Date de creation</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {userList()}
                </tbody>
            </table>
        </div>
    );
};

export default User;
