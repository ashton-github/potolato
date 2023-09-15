import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {userService} from "../../../Services";

const UserEdit = () => {
    let navigate = useNavigate();
    let { userId } = useParams();
    const [user, setUser] = useState({id : userId, username : "" , email : "", lastName : "", firstName : "", password : ""});
    const [isLoad, setLoad] = useState(false);

    const flag = useRef(false);

    useEffect(() => {

        if(flag.current===false){
            userService.getUser(userId)
                .then(res => {
                        let r = res.data;
                        r.password = "";
                        setUser(r);
                        setLoad(true);
                })
                .catch(error => console.log(error))
        }

        return () => {
            flag.current = true
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (e) => {
      e.preventDefault();

        userService.editUser(user.id, user)
            .then(res => {
                console.log(res.data)
                navigate("../index")
            })
            .catch(error => console.log(error))
    }



    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    if(!isLoad){
        return <div>Loading ...</div>
    }
    return (
        <div className="UserEdit">
            ici edit user :
            userid = {user.id} <br/><br/><br/>
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
                    <button>Modifier</button>
                </div>

            </form>

        </div>
    );
};

export default UserEdit;
