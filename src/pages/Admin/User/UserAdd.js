import React, {useState} from 'react';
import {userService} from "../../../Services";
import {useNavigate} from "react-router-dom";

const UserAdd = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({});

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }


    const saveUser = (user) => {
        userService.addUser(user)
            .then(res => {
                console.log(res.data)
                navigate("../index")
            })
            .catch(error => console.log(error))
    }

    const onSubmit = (e) => {
      e.preventDefault();
        saveUser(user)
    }

    return (
        <div className="UserAdd">
            <h2>Nouveau utilisateur :</h2>
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="lastName">Non</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="firstName">Prenom</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="email">e-mail</label>
                    <input type="text" name="email" value={user.email} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" value={user.username} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name="password" value={user.password} onChange={onChange} placeholder="**********"/>
                </div>
                <div className="group">
                    <button>Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default UserAdd;
