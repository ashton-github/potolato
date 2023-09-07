import React, {useState} from 'react';
import "./auth.css"

const Login = () => {

    //const [login, setLogin] = useState();
    //const [password, setPassword] = useState();
    const [credentials, setCredentials] = useState({
        login:'',
        password:''
    });

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
      e.preventDefault();
    }




    return (
        <div className="login_form">
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="login">Identifiant</label>
                    <input type="text" name="login" value={credentials.login} onChange={onChange}/>
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
