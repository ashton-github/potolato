import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./auth.css"
import {account_services} from "../../Services/";


const Login = () => {

    let navigate = useNavigate();
    let loggedAccount = account_services;
    //const [login, setLogin] = useState();
    //const [password, setPassword] = useState();
    const [credentials, setCredentials] = useState({
        username:'aslemturki',
        password:'aslemPWD.1'
    });

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        account_services.login(credentials)
            .then(
                res => {
                    console.log(res.data);
                    loggedAccount.saveToken(res.data.accessToken);
                    loggedAccount.saveRole(res.data.roles[0]);
                    if (loggedAccount.isLggedAsAdmin()){
                        navigate("/admin");
                    }else {
                        navigate("/");
                    }
                })
            .catch(error => console.log(error));
    }




    return (
        localStorage.clear(),
        <div className="login_form">
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="username">Identifiant</label>
                    <input type="text" name="username" value={credentials.username} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <div className="group">
                    <button>Connexion</button>
                </div>

            </form>
        </div>

    );
};

export default Login;
